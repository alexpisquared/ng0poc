using PCSC;
using PCSC.Iso7816;
using PCSC.Utils;
using System;

namespace MonitorReaderEvents.Lib
{
  public static class Cx
  {
    public static (bool Success, string Report) GetUid(IContextFactory contextFactory, string readerName)
    {
      try
      {
        using (var ctx = contextFactory.Establish(SCardScope.System))
        {
          using (var rfidReader = new SCardReader(ctx))
          {
            try
            {
              var rc = rfidReader.SetAttrib(SCardAttribute.AsyncProtocolTypes, new[] { (byte)1 }); //

              var sc = rfidReader.Connect(readerName, SCardShareMode.Shared, SCardProtocol.Any);
              if (sc != SCardError.Success)
              {
                return (false, SCardHelper.StringifyError(sc));
              }
              else
              {
                var apdu = new CommandApdu(IsoCase.Case2Short, rfidReader.ActiveProtocol)
                {
                  CLA = 0xFF,
                  Instruction = InstructionCode.GetData,
                  P1 = 0x00,
                  P2 = 0x00,
                  Le = 0                                            // We don't know the ID tag size
                };

                sc = rfidReader.BeginTransaction();
                if (sc != SCardError.Success)
                {
                  return (false, "Could not begin transaction.");
                }
                else
                {
                  var receiveBuffer = new byte[256];

                  sc = rfidReader.Transmit(
                      SCardPCI.GetPci(rfidReader.ActiveProtocol),   // Protocol Control Information (T0, T1 or Raw)
                      apdu.ToArray(),                               // command APDU
                      new SCardPCI(),                               // returning Protocol Control Information
                      ref receiveBuffer);                           // data buffer

                  if (sc != SCardError.Success)
                  {
                    return (false, SCardHelper.StringifyError(sc));
                  }

                  var responseApdu = new ResponseApdu(receiveBuffer, IsoCase.Case2Short, rfidReader.ActiveProtocol);
                  if (responseApdu.HasData)
                  {
                    if (!(responseApdu.SW1 == 0x90 && responseApdu.SW2 == 0))
                      return (false, "Not 90-00");

                    var uid = responseApdu.GetData();

                    return (true, BitConverter.ToString(uid).Replace("-", ""));
                  }
                  else
                  {
                    return (false, "ResponseApdu has no data");
                  }
                }
              }
            }
            catch (Exception ex) { return (false, ex.Message); }
            finally
            {
              rfidReader.EndTransaction(SCardReaderDisposition.Leave);
              rfidReader.Disconnect(SCardReaderDisposition.Reset);
            }
          }
        }
      }
      catch (Exception ex) { return (false, ex.Message); }
    }
  }
}
