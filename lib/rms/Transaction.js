
var Customer = require('./Customer')
  , QSBridge = require('./QSBridge')
  , QSRules = require('./QSRules')
  , TransactionEntry = require('./TransactionEntry');


function resolve(property) {

}


module.exports = Transaction;

function Transaction(){
  if (!(this instanceof Transaction)) return new Transaction();

  this.AnyItemsOrdered = false;
  this.Balance = 0;
  this.CashBackSurcharge = null;
  this.ChangeFoodStamp = null;
  this.Comment = null;
  this.CurrencyDescriptorDisplay = null;
  this.CurrentEntryKey = null;
  this.Customer = Customer();
  this.DebitAllSurcharges = null;
  this.DebitSurcharge = null;
  this.Deposit = null;
  this.DepositOverride = null;
  this.DepositPrevious = null;
  this.DepositTotal = null;
  this.Discount = null;
  this.DiscountMethod = null;
  this.DiscountPercent = null;
  this.DiscountPurchased = null;
  this.DropAmount = null;
  this.DropPayoutID = null;
  this.Entries = null;
  this.ExchangeID = null;
  this.ExchangeStatus = null;
  this.ExpirationOrDueDate = null;
  this.HoldComment = null;
  this.InProgress = null;
  this.IsOrder = null;
  this.ItemTaxes = null;
  this.NonTenderTransactionID = null;
  this.OrderBalance = null;
  this.OrderClosed = null;
  this.OrderHistoryID = null;
  this.OrderID = null;
  this.PaymentID = null;
  this.PayoutAmount = null;
  this.PayoutRecipient = null;
  this.Points = null;
  this.PriceLevel = null;
  this.Purchases = null;
  this.ReasonCode = null;
  this.Recalled = null;
  this.RecallID = null;
  this.RecallType = null;
  this.ReferenceNumber = null;
  this.ReturningItems = null;
  this.ReturnMode = null;
  this.SalesRep = null;
  this.SalesTax = null;
  this.SalesTaxes = null;
  this.SalesTaxOnOrder = null;
  this.SalesTaxPurchased = null;
  this.Shipping = null;
  this.Subtotal = null;
  this.SubTotalOnOrder = null;
  this.SubTotalPurchased = null;
  this.Taxable = null;
  this.TenderDefault = null;
  this.TenderedFoodStamps = null;
  this.TenderedInFoodStamps = null;
  this.TenderPopsCashDrawer = null;
  this.Tenders = null;
  this.Total = null;
  this.TotalDue = null;
  this.TotalOnOrder = null;
  this.TotalPurchased = null;
  this.TotalQuantity = null;
  this.TotalQuantityOnOrder = null;
  this.TotalQuantityPurchased = null;
  this.TotalTendered = null;
  this.TotalTenderIn = null;
  this.TotalTenderOut = null;
  this.TotalWeight = null;
  this.TotalWeightOnOrder = null;
  this.TotalWeightPurchased = null;
  this.TransactionNumber = null;
  this.TransactionTime = null;
  this.TransactionType = null;
}
Transaction.prototype.CalculateTotals = function() {};
Transaction.prototype.ClearCustomer = function() {};
Transaction.prototype.ClearSalesRep = function() {};
Transaction.prototype.LoadSalesRep = function(ID) {};
Transaction.prototype.MaximumFoodStampsAllowed = function() {};
Transaction.prototype.Post = function(CashierID,TransactionTime) {};
Transaction.prototype.PostTenderValidate = function() {};
Transaction.prototype.PreTenderValidate = function() {};
Transaction.prototype.RevertToSavedPrices = function() {};
Transaction.prototype.SavePrices = function() {};
Transaction.prototype.SetCustomer = function(CustomerID,OverrideExistingDiscount) {};
Transaction.prototype.SetDepositTotal = function(NewValue) {};
Transaction.prototype.SetDiscountPercentage = function(Method,Percent) {};
Transaction.prototype.SetDrop = function(NewValue,Comment) {};
Transaction.prototype.SetEntryDiscountReasonCodes = function(Value) {};
Transaction.prototype.SetEntryReturnReasonCodes = function(Value) {};
Transaction.prototype.SetEntryTaxChangeReasonCodes = function(Value) {};
Transaction.prototype.SetPayout = function(NewValue,Comment,Recipient) {};
Transaction.prototype.SetPriceLevel = function(NewLevel) {};
Transaction.prototype.SetTaxable = function(NewValue,Internal) {};
Transaction.prototype.SetTransactionAmountOffOnce = function(AmountOff) {};
Transaction.prototype.SetTransactionAmountOnce = function(NewAmount) {};
Transaction.prototype.SetTransactionPercentageOffOnce = function(DiscountPercentage) {};
Transaction.prototype.SetTransactionType = function(NewValue) {};
Transaction.prototype.TendersForceValidation = function() {};
Transaction.prototype.TendersResetValidations = function() {};
