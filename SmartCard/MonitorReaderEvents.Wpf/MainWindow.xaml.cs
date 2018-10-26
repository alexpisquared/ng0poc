using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using MonitorReaderEvents.Lib;
using PCSC;
using PCSC.Exceptions;
using PCSC.Iso7816;
using PCSC.Monitoring;
using PCSC.Utils;

namespace WpfApp2
{
  public partial class MainWindow : Window, IDisposable
  {
    public MainWindow() { InitializeComponent(); }
    void onEx(object sender, RoutedEventArgs e) => Close();
    void onGo(object sender, RoutedEventArgs e)
    {
      ((Button)sender).IsEnabled = false;
      try
      {
        if (_monitor?.Monitoring == true)   /**/ { GetUID_finis(); tk1.Background = new SolidColorBrush(Colors.Azure); }
        else                                /**/ { GetUID_begin(); tk1.Background = new SolidColorBrush(Colors.Yellow); }
      }
      catch (Exception ex) { tk1.Text += $"{ex.Message}\r\n"; ; }
      finally { ((Button)sender).IsEnabled = true; }
    }
    void onNG(object sender, RoutedEventArgs e)
    {
      try
      {
        ((Button)sender).IsEnabled = false;
        if (_monitor?.Monitoring == true)   /**/ { GetUID_finis(); tk1.Background = new SolidColorBrush(Colors.Azure); }
        else                                /**/ { GetUID_begin(); tk1.Background = new SolidColorBrush(Colors.Yellow); }
          ((Button)sender).IsEnabled = true;
      }
      catch (Exception ex) { tk1.Text += $"{ex.Message}\r\n"; ; }
    }

    readonly IContextFactory _contextFactory = ContextFactory.Instance;
    SCardMonitor _monitor;

    void GetUID_begin()
    {
      try
      {
        var readerNames = getReaderNames();

        if (readerNames?.Length < 1) tk1.Text = "No Readers connected";

        tk1.Text = ($"Connected reader(s): \r\n\t{string.Join("\r\n\t", readerNames)}\r\n");

        _monitor = new SCardMonitor(_contextFactory, SCardScope.System);

        _monitor.MonitorException += monitorException;
        _monitor.StatusChanged += statusChanged;
        _monitor.Start(readerNames);
      }
      catch (Exception ex) { tk1.Text += $"{ex.Message}\r\n"; ; }
    }
    void GetUID_finis()
    {
      try
      {
        _monitor.Cancel();
        _monitor.StatusChanged -= statusChanged;
        _monitor.MonitorException -= monitorException;
        tk1.Text += "Done!\r\n";
        tk1.Background = new SolidColorBrush(Colors.Azure);
        System.Media.SystemSounds.Beep.Play();
        tk1.Background = new SolidColorBrush(Colors.LightGray);
      }
      catch (Exception ex) { tk1.Text += $"{ex.Message}\r\n"; ; }
    }
    void monitorException(object sender, PCSCException ex) => tk1.Text += ex.Message;
    void statusChanged(object sender, StatusChangeEventArgs args)
    {
      try
      {
        if ((args.NewState & SCRState.Present) != 0 && (args.NewState & SCRState.InUse) == 0 && (args.NewState & SCRState.Mute) == 0)
        {
          var (Success, Report) = Cx.GetUid(_contextFactory, args.ReaderName);
          tk1.Text += "!UI Thread??";
          Application.Current.Dispatcher.BeginInvoke(new Action(() =>
          {
            tk1.Text += (Success ? $"{Report}\r\n" : $"{args.LastState,-18} ► {args.NewState,-18} + {BitConverter.ToString(args.Atr)} => {Report}\r\n");
            if (Success)
              GetUID_finis();
          }));
        }
      }
      catch (Exception ex) { tk1.Text += $"{ex.Message}\r\n"; ; }
    }
    string[] getReaderNames() { using (var context = _contextFactory.Establish(SCardScope.System)) { return context.GetReaders(); } }

    public void Dispose()
    {
      if (_monitor.Monitoring)
        GetUID_finis();
    }
  }

}
