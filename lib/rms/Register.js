
module.exports = Register;

function Register(){
  if (!(this instanceof Register)) return new Register();

  this.ActivePrinter = null;
  this.Batch = null;
  this.CashDrawer1 = null;
  this.CashDrawer2 = null;
  this.CustomButtons = null;
  this.DefaultPriceLevel = null;
  this.ID = null;
  this.Keyboard = null;
  this.Macros = null;
  this.MICR = null;
  this.MSR = null;
  this.NetDisplay = null;
  this.Number = null;
  this.PINPad = null;
  this.PoleDisplay = null;
  this.ReceiptPrinter = null;
  this.ReceiptPrinter2 = null;
  this.Scanner = null;
  this.SigCap = null;
  this.SlipPrinter = null;
  this.WeightScale = null;
  this.ZZBatchNumber = null;

}
Register.prototype.SetActivePrinterNumber = function(PrinterNumber) {};