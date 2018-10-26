using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using PCSC;
using PCSC.Exceptions;
using PCSC.Iso7816;
using PCSC.Monitoring;
using PCSC.Utils;

namespace MonitorReaderEvents
{
  public class Program
  {
    static readonly IContextFactory _contextFactory = ContextFactory.Instance;

    public static void Main()
    {
      try
      {
        Console.WriteLine("  This program will monitor all SmartCard readers and display all status changes.\n");

        if (!Debugger.IsAttached)
          setupTracingOptions("ReaderTester");
        Trace.WriteLine(Environment.MachineName);

        // Retrieve the names of all installed readers.
        var readerNames = GetReaderNames();
        if (NoReaderFound(readerNames)) { Console.WriteLine("There are currently no readers installed."); Console.ReadKey(); return; }

        using (var monitor = new SCardMonitor(_contextFactory, SCardScope.System)) // Create smartcard monitor using a context factory. The context will be automatically released after monitor.Dispose()
        {
          AttachToAllEvents(monitor); // Remember to detach if you use this in production!
          ShowUserInfo(readerNames);
          monitor.Start(readerNames);

          while (true)
          {
            if (Console.ReadKey().Key == ConsoleKey.Escape) break;

            if (monitor.Monitoring) { monitor.Cancel(); /**/ Console.WriteLine("Monitoring paused.  (Press Esc to quit)"); }
            else { monitor.Start(readerNames);          /**/ Console.WriteLine("Monitoring started. (Press Esc to quit)"); }
          }
        }
      }
      catch (Exception ex) { var c = Console.ForegroundColor; Console.ForegroundColor = ConsoleColor.Red; Console.WriteLine($"\n{ex}\n"); Console.ForegroundColor = c; }
    }
    public static void GetUID(string readerName)
    {
      try
      {
        var c = Console.ForegroundColor;
        //Console.Write("Scan: ");
        Console.ForegroundColor = ConsoleColor.DarkGreen;

        using (var ctx = _contextFactory.Establish(SCardScope.System))
        {
          using (var rfidReader = new SCardReader(ctx)) // 'using' statement to make sure the reader will be disposed (disconnected) on exit
          {
            var sc = rfidReader.Connect(readerName, SCardShareMode.Shared, SCardProtocol.Any);
            if (sc != SCardError.Success)
            {
              Console.ForegroundColor = ConsoleColor.Red;
              Console.Write($"{SCardHelper.StringifyError(sc)}");
            }
            else
            {
              var apdu = new CommandApdu(IsoCase.Case2Short, rfidReader.ActiveProtocol)
              {
                CLA = 0xFF,
                Instruction = InstructionCode.GetData,
                P1 = 0x00,
                P2 = 0x00,
                Le = 0 // We don't know the ID tag size
              };

              sc = rfidReader.BeginTransaction();
              if (sc != SCardError.Success)
              {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write("Could not begin transaction.");
              }
              else
              {
                var receiveBuffer = new byte[256];
                var adpuSunst = new byte[256];

                sc = rfidReader.Transmit(
                    SCardPCI.GetPci(rfidReader.ActiveProtocol),                // Protocol Control Information (T0, T1 or Raw)
                    apdu.ToArray(),                // command APDU
                    new SCardPCI(),             // returning Protocol Control Information
                    ref receiveBuffer);     // data buffer

                if (sc != SCardError.Success)
                {
                  Console.ForegroundColor = ConsoleColor.Red;
                  Console.Write("\tError: " + SCardHelper.StringifyError(sc));
                }

                var responseApdu = new ResponseApdu(receiveBuffer, IsoCase.Case2Short, rfidReader.ActiveProtocol);
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write($"{(responseApdu.HasData ? BitConverter.ToString(responseApdu.GetData()) : "No uid received"),-22}  ");

                Console.ForegroundColor = ConsoleColor.DarkGreen;
                Console.Write($"{responseApdu.SW1:X2}    {responseApdu.SW2:X2}    ");

                DisplayCardAtr(reader: rfidReader);

                rfidReader.EndTransaction(SCardReaderDisposition.Leave);
                rfidReader.Disconnect(SCardReaderDisposition.Reset);
              }
            }
          }
        }
        Console.ForegroundColor = c;
      }
      catch (Exception ex) { var c = Console.ForegroundColor; Console.ForegroundColor = ConsoleColor.Red; Console.WriteLine($"\n{ex}\n"); Console.ForegroundColor = c; }
    }
    static void DisplayCardAtr(ISCardReader reader)
    {
      try
      {
        var rc = reader.GetAttrib(SCardAttribute.AtrString, out var atr);

        if (rc != SCardError.Success)
        {
          Console.ForegroundColor = ConsoleColor.Red;
          Console.Write("Error by trying to receive the ATR. {0}", SCardHelper.StringifyError(rc));
        }
        else
        {
          Console.ForegroundColor = ConsoleColor.Gray;
          Console.Write("{0}", BitConverter.ToString(atr ?? new byte[] { }));
        }
      }
      catch (Exception ex) { var c = Console.ForegroundColor; Console.ForegroundColor = ConsoleColor.Red; Console.WriteLine($"\n{ex}\n"); Console.ForegroundColor = c; }
    }
    static void ShowUserInfo(IEnumerable<string> readerNames)
    {
      var c = Console.ForegroundColor;
      Console.WriteLine($"  Start monitoring for reader(s):");

      Console.ForegroundColor = ConsoleColor.DarkYellow;
      foreach (var reader in readerNames)
        Console.WriteLine($" {reader}");

      Console.ForegroundColor = ConsoleColor.Yellow;
      Console.WriteLine("\n  Press Esc to exit or any key to toggle monitor.\n");
      Console.ForegroundColor = c;
      Console.WriteLine($" {("ReaderName"),-42}  Event Type           Last State -> New State       UID Scan Reasult        SW1   SW2   ATR");
    }

    static void AttachToAllEvents(ISCardMonitor monitor)
    {
      monitor.Initialized += (sender, args) => ev("Initialized", args);
      monitor.CardRemoved += (sender, args) => ev("Card Removed", args);
      monitor.CardInserted += (sender, args) => ev("Card Inserted", args);
      monitor.StatusChanged += sc;
      monitor.MonitorException += ex;
    }
    static void ev(string eventName, CardStatusEventArgs args)
    {
      Console.ForegroundColor = ConsoleColor.DarkYellow;
      Console.Write($" {args.ReaderName,-42} ");
      Console.ForegroundColor = ConsoleColor.DarkCyan;
      Console.Write($" {eventName,-15} {(""),19}{args.State,-18}");
      /*if ((args.State & SCRState.Present) != 0) GetUID(args.ReaderName);*/
      Console.WriteLine($"{(eventName.Equals("Card Removed") ? "\r\n\n" : "")}");
      Console.ResetColor();
    }
    static void sc(object sender, StatusChangeEventArgs args)
    {
      try
      {
        var c = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.DarkYellow;
        Console.Write($" {args.ReaderName,-42} ");
        Console.ForegroundColor = ConsoleColor.DarkGreen;
        Console.Write($" {("StatusChanged"),-15} ");

        Console.ForegroundColor = (args.NewState & SCRState.InUse) == 0 && (args.NewState & SCRState.Mute) == 0 ? ConsoleColor.Cyan : ConsoleColor.Magenta;
        Console.Write($"{args.LastState,15} -> {args.NewState,-15} ");

        if (
          (args.NewState & SCRState.Present) != 0 &&
          (args.NewState & SCRState.InUse) == 0 &&
          (args.NewState & SCRState.Mute) == 0)
          GetUID(args.ReaderName);
        else if (
          (args.NewState & SCRState.InUse) != 0 ||
          (args.NewState & SCRState.Mute) != 0)
          Console.Write($"<== state unreadable.");

        Console.WriteLine($"");
        Console.ForegroundColor = c;
      }
      catch (Exception ex) { var c = Console.ForegroundColor; Console.ForegroundColor = ConsoleColor.Red; Console.WriteLine($"\n{ex}\n"); Console.ForegroundColor = c; }
    }
    static void ex(object sender, PCSCException ex) { Console.Write("Monitor exited due an error:"); Console.WriteLine(SCardHelper.StringifyError(ex.SCardError)); }

    static string[] GetReaderNames() { using (var context = _contextFactory.Establish(SCardScope.System)) { return context.GetReaders(); } }
    static bool NoReaderFound(ICollection<string> readerNames) { return readerNames == null || readerNames.Count < 1; }

    static void setupTracingOptions(string appName)
    {
      try
      {
        Trace.Listeners.Add(new TextWriterTraceListener(Path.Combine(TrgLogPath, $@"{appName}{Environment.UserName.Substring(1, 2)}-{DateTime.Now:dddHHmmss}.log")));
        Trace.AutoFlush = true;
      }
      catch
      {
        Trace.Listeners.Clear();
      }
    }
    public static string TrgLogPath
    {
      get
      {
        var path = Environment.UserDomainName.Equals("CORP", StringComparison.OrdinalIgnoreCase) ? @"\\servergamma\Public\Apps\Nymi\log" : Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), @"Nymi\log");

        if (Directory.Exists(path)) return path;

        Directory.CreateDirectory(path);
        if (Directory.Exists(path)) return path;

        path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), @"Nymi\log");
        if (Directory.Exists(path)) return path;
        Directory.CreateDirectory(path);

        path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "DevLog");
        if (Directory.Exists(path)) return path;
        Directory.CreateDirectory(path);

        if (Directory.Exists(path)) return path;

        return Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), @"Nymi\log");
      }
    }
  }
}
