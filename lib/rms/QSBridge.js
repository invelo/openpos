var _ = require('lodash')
  , debug = require('../dev/logger')()
  , proxy = require('./QSWebBridge');

  var fn = {};

  fn.CancelTransaction = function() {
    return proxy().FireEvent('CancelTransaction');
  };
  fn.ClearCustomer = function() {
    return proxy().FireEvent('ClearCustomer');
  };
  fn.ClearStatus = function() {
    return proxy().FireEvent('ClearStatus');
  };
  fn.ConcludeTransaction = function() {
    return proxy().FireEvent('ConcludeTransaction');
  };
  fn.CreateBackOrder = function() {
    return proxy().FireEvent('CreateBackOrder');
  };
  fn.CreateHold = function() {
    return proxy().FireEvent('CreateHold');
  };
  fn.CreateLayaway = function() {
    return proxy().FireEvent('CreateLayaway');
  };
  fn.CreatePostVoid = function() {
    return proxy().FireEvent('CreatePostVoid');
  };
  fn.CreateQuote = function() {
    return proxy().FireEvent('CreateQuote');
  };
  fn.CreateSale = function() {
    return proxy().FireEvent('CreateSale');
  };
  fn.CreateWorkOrder = function() {
    return proxy().FireEvent('CreateWorkOrder');
  };
  fn.CurrencyToString = function(Value) {
    return proxy().FireEvent('CurrencyToString',Value);
  };
  fn.DateTimeToString = function(Value) {
    return proxy().FireEvent('DateTimeToString',Value);
  };
  fn.DateToString = function(Value) {
    return proxy().FireEvent('DateToString',Value);
  };
  fn.DoubleToString = function(Value) {
    return proxy().FireEvent('DoubleToString',Value);
  };
  fn.ExecuteProgram = function(Description,Filename,CommandLine) {
    return proxy().FireEvent('ExecuteProgram',Description,Filename,CommandLine);
  };
  fn.ExecuteProgramAndWait = function(Description,Filename,CommandLine) {
    return proxy().FireEvent('ExecuteProgramAndWait',Description,Filename,CommandLine);
  };
  fn.Format = function(Expression,Format) {
    return proxy().FireEvent('Format',Expression,Format);
  };
  fn.GetStatusText = function() {
    return proxy().FireEvent('GetStatusText');
  };
  fn.HideCustom = function() {
    return proxy().FireEvent('HideCustom');
  };
  fn.HideFunction = function() {
    return proxy().FireEvent('HideFunction');
  };
  fn.HideMe = function() {
    return proxy().FireEvent('HideMe');
  };
  fn.HideStatus = function() {
    return proxy().FireEvent('HideStatus');
  };
  fn.HideTotals = function() {
    return proxy().FireEvent('HideTotals');
  };
  fn.HideWebStatus = function() {
    return proxy().FireEvent('HideWebStatus');
  };
  fn.InitializeTransaction = function() {
    return proxy().FireEvent('InitializeTransaction');
  };
  fn.Login = function() {
    return proxy().FireEvent('Login');
  };
  fn.Logout = function() {
    return proxy().FireEvent('Logout');
  };
  fn.MsgBox = function(Prompt,Buttons,Title) {
    return proxy().FireEvent('MsgBox');
  };
  fn.PerformAddItem = function(ItemID,ItemLookupCode,Quantity,OverridePrice,Price,OverrideDescription,Description) {
    return proxy().FireEvent('PerformAddItem',ItemID,ItemLookupCode,Quantity,OverridePrice,Price,OverrideDescription,Description);
  };
  fn.PerformRecall = function() {
    return proxy().FireEvent('PerformRecall');
  };
  fn.PerformTransactionCalculate = function() {
    return proxy().FireEvent('PerformTransactionCalculate');
  };
  fn.PerformTransactionLookup = function() {
    return proxy().FireEvent('PerformTransactionLookup');
  };
  fn.PostDrawerFunction = function() {
    return proxy().FireEvent('PostDrawerFunction');
  };
  fn.PostDrop = function() {
    return proxy().FireEvent('PostDrop');
  };
  fn.PostNoSale = function() {
    return proxy().FireEvent('PostNoSale');
  };
  fn.PostOpenClose = function() {
    return proxy().FireEvent('PostOpenClose');
  };
  fn.PostPayment = function() {
    return proxy().FireEvent('PostPayment');
  };
  fn.PostPayout = function() {
    return proxy().FireEvent('PostPayout');
  };
  fn.PostTransaction = function(Initialize) {
    return proxy().FireEvent('PostTransaction',Initialize);
  };
  fn.PostTransactionUnattended = function(Initialize) {
    return proxy().FireEvent('PostTransactionUnattended',Initialize);
  };
  fn.PrintLastReceipt = function() {
    return proxy().FireEvent('PrintLastReceipt');
  };
  fn.PrintXReport = function() {
    return proxy().FireEvent('PrintXReport');
  };
  fn.PrintZReport = function() {
    return proxy().FireEvent('PrintZReport');
  };
  fn.PrintZZReport = function() {
    return proxy().FireEvent('PrintZZReport');
  };
  fn.Quit = function() {
    return proxy().FireEvent('Quit');
  };
  fn.RecallBackOrder = function() {
    return proxy().FireEvent('RecallBackOrder');
  };
  fn.RecallHold = function() {
    return proxy().FireEvent('RecallHold');
  };
  fn.RecallLayaway = function() {
    return proxy().FireEvent('RecallLayaway');
  };
  fn.RecallQuote = function() {
    return proxy().FireEvent('RecallQuote');
  };
  fn.RecallWorkOrder = function() {
    return proxy().FireEvent('RecallWorkOrder');
  };
  fn.RefreshDisplay = function() {
    return proxy().FireEvent('RefreshDisplay');
  };
  fn.Secure = function() {
    return proxy().FireEvent('Secure');
  };
  fn.SelectBackOrder = function() {
    return proxy().FireEvent('SelectBackOrder');
  };
  fn.SelectCustomer = function() {
    return proxy().FireEvent('SelectCustomer');
  };
  fn.SelectHoldTransaction = function() {
    return proxy().FireEvent('SelectHoldTransaction');
  };
  fn.SelectItem = function() {
    return proxy().FireEvent('SelectItem');
  };
  fn.SelectLayaway = function() {
    return proxy().FireEvent('SelectLayaway');
  };
  fn.SelectProcess = function() {
    return proxy().FireEvent('SelectProcess');
  };
  fn.SelectQuote = function() {
    return proxy().FireEvent('SelectQuote');
  };
  fn.SelectSalesRep = function() {
    return proxy().FireEvent('SelectSalesRep');
  };
  fn.SelectShippingEdit = function() {
    return proxy().FireEvent('SelectShippingEdit');
  };
  fn.SelectSubstituteItem = function(ItemID) {
    return proxy().FireEvent('SelectSubstituteItem',ItemID);
  };
  fn.SelectTransaction = function() {
    return proxy().FireEvent('SelectTransaction');
  };
  fn.SelectWorkorder = function() {
    return proxy().FireEvent('SelectWorkorder');
  };
  fn.SetCustomer = function(CustomerID) {
    return proxy().FireEvent('SetCustomer',CustomerID);
  };
  fn.SetGridDefaultsEdit = function(Grid) {
    return proxy().FireEvent('SetGridDefaultsEdit',Grid);
  };
  fn.SetGridDefaultsList = function(frm) {
    return proxy().FireEvent('SetGridDefaultsList',frm);
  };
  fn.SetStatus = function(Text) {
    return proxy().FireEvent('SetStatus',Text);
  };
  fn.SetSubstituteItem = function(ItemID) {
    return proxy().FireEvent('SetSubstituteItem',ItemID);
  };
  fn.SetTransactionSalesRep = function(SalesRepID) {
    return proxy().FireEvent('SetTransactionSalesRep',SalesRepID);
  };
  fn.ShowAbout = function() {
    return proxy().FireEvent('ShowAbout');
  };
  fn.ShowAutoGenerate = function() {
    return proxy().FireEvent('ShowAutoGenerate');
  };
  fn.ShowCalendar = function() {
    return proxy().FireEvent('ShowCalendar');
  };
  fn.ShowCalendarEventReminder = function() {
    return proxy().FireEvent('ShowCalendarEventReminder');
  };
  fn.ShowClosingAmounts = function() {
    return proxy().FireEvent('ShowClosingAmounts');
  };
  fn.ShowCustom = function() {
    return proxy().FireEvent('ShowCustom');
  };
  fn.ShowDiscount = function() {
    return proxy().FireEvent('ShowDiscount');
  };
  fn.ShowDisplayProperties = function() {
    return proxy().FireEvent('ShowDisplayProperties');
  };
  fn.ShowFunction = function() {
    return proxy().FireEvent('ShowFunction');
  };
  fn.ShowGasPumpDesposits = function() {
    return proxy().FireEvent('ShowGasPumpDesposits');
  };
  fn.ShowGraphs = function() {
    return proxy().FireEvent('ShowGraphs');
  };
  fn.ShowHTML = function(URL) {
    return proxy().FireEvent('ShowHTML',URL);
  };
  fn.ShowItemComment = function() {
    return proxy().FireEvent('ShowItemComment');
  };
  fn.ShowJournalViewer = function() {
    return proxy().FireEvent('ShowJournalViewer');
  };
  fn.ShowMenu = function(Caption,Parameters) {
    return proxy().FireEvent('ShowMenu',Caption,Parameters);
  };
  fn.ShowMessages = function() {
    return proxy().FireEvent('ShowMessages');
  };
  fn.ShowNewMessage = function() {
    return proxy().FireEvent('ShowNewMessage');
  };
  fn.ShowOpeningAmounts = function() {
    return proxy().FireEvent('ShowOpeningAmounts');
  };
  fn.ShowPickupEntireOrder = function() {
    return proxy().FireEvent('ShowPickupEntireOrder');
  };
  fn.ShowPickupOrder = function() {
    return proxy().FireEvent('ShowPickupOrder');
  };
  fn.ShowSalesTaxSelector = function() {
    return proxy().FireEvent('ShowSalesTaxSelector');
  };
  fn.ShowSerialNumber = function() {
    return proxy().FireEvent('ShowSerialNumber');
  };
  fn.ShowStatus = function() {
    return proxy().FireEvent('ShowStatus');
  };
  fn.ShowTimeClock = function() {
    return proxy().FireEvent('ShowTimeClock');
  };
  fn.ShowTotals = function() {
    return proxy().FireEvent('ShowTotals');
  };
  fn.ShowTransaction = function() {
    return proxy().FireEvent('ShowTransaction');
  };
  fn.ShowWebStatus = function() {
    return proxy().FireEvent('ShowWebStatus');
  };
  fn.Tender = function() {
    return proxy().FireEvent('Tender');
  };
  fn.TimeToString = function(Value) {
    return proxy().FireEvent('TimeToString',Value);
  };
  fn.ToggleReceiptPrintersOn = function() {
    return proxy().FireEvent('ToggleReceiptPrintersOn');
  };
  fn.ToggleReturnMode = function() {
    return proxy().FireEvent('ToggleReturnMode');
  };
  fn.ToggleTaxableItem = function() {
    return proxy().FireEvent('ToggleTaxableItem');
  };
  fn.ToggleTaxableTransaction = function() {
    return proxy().FireEvent('ToggleTaxableTransaction');
  };


var QSBridge = _.restParam(function(EventName,Parameters) {
  debug.log('QSBridge FireEvent: '+EventName);
  return QSBridge[EventName](Parameters);
});

for(var key in fn) {
  QSBridge[key] = _.spread(fn[key]);
}

module.exports = QSBridge;
