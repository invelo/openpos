var _ = require('lodash')
  , debug = require('../dev/logger')()
  , Cashier = require('./Cashier')
  , Configuration = require('./Configuration')
  , Customer = require('./Customer')
  , Post = require('./Post')
  , PostAccount = require('./PostAccount')
  , PostEntry = require('./PostEntry')
  , ReasonCode = require('./ReasonCode')
  , Register = require('./Register')
  , Session = require('./SessionClass')
  , Status = require('./Status')
  , Shipping = require('./Shipping')
  , Tender = require('./Tender')
  , TenderDescriptor = require('./TenderDescriptor')
  , Transaction = require('./Transaction')
  , TransactionEntry = require('./TransactionEntry');

module.exports = QSRules;

function QSRules(path,value) {
  return QSRules.Session();
}
QSRules.Cashier = Cashier.CashierClass;
QSRules.Configuration = Configuration.ConfigurationClass;
QSRules.Customer = Customer.CustomerClass;
QSRules.Post = Post.PostClass;
QSRules.PostAccount = PostAccount.PostAccountClass;
QSRules.PostEntry = PostEntry.PostEntryClass;
QSRules.ReasonCode = ReasonCode.ReasonCodeClass;
QSRules.Register = Register.RegisterClass;
QSRules.Session = Session.SessionClass;
QSRules.Status = Status.StatusClass;
QSRules.Shipping = Shipping.ShippingClass;
QSRules.Tender = Tender.TenderClass;
QSRules.TenderDescriptor = TenderDescriptor.TenderDescriptorClass;
QSRules.Transaction = Transaction.TransactionClass;
QSRules.TransactionEntry = TransactionEntry.TransactionEntryClass;