  var Cashier = require('./Cashier')
    , Configuration = require('./Configuration')
    , Post = require('./Post')
    , PostAccount = require('./PostAccount')
    , PostEntry = require('./PostEntry')
    , ReasonCode = require('./ReasonCode')
    , Register = require('./Register')
    , Status = require('./Status')
    , Shipping = require('./Shipping')
    , Tender = require('./Tender')
    , TenderDescriptor = require('./TenderDescriptor')
    , Transaction = require('./Transaction')
    , proxy = require('./QSWebBridge');

  module.exports = session;

  function session() {

  }
  session.proxy = proxy.context();
  session.SessionClass = SessionClass;


  /**
  * The SessionClass class is the primary entry point
  * for DLL and HTML add-ins.
  *
  * @class SessionClass
  * @constructor
  */
  function SessionClass(){
    if (!(this instanceof SessionClass)) return new SessionClass();

    this.AccountingPost = function() {};
    this.CalendarEventReminders = function() {};
    this.CalendarEvents = function() {};
    this.Carriers = function() {};
    this.Cashier = Cashier();
    this.Configuration = Configuration();
    this.CurrencyDescriptorDefault = function() {};
    this.CurrencyDescriptors = function() {};
    this.CurrentDate = function() {};
    this.CurrentDateTime = function() {};
    this.CustomCaptions = function() {};
    this.Database = function() {};
    this.GasPumps = function() {};
    this.IsPOS = function() {};
    this.IsSSLConnectionOpen = function() {};
    this.ItemTaxCalculator = function() {};
    this.License = function() {};
    this.OnHoldTransactionCount = function() {};
    this.Processes = function() {};
    this.QuantityCheckRequest = function() {};
    this.ReasonCodes = function() {};
    this.Register = Register();
    this.Report = function() {};
    this.SalesTaxDescriptors = function() {};
    this.Schedules = function() {};
    this.ShippingEdit = function() {};
    this.Status = function() {};
    this.Transaction = Transaction();
    this.Variable = function() {};
    this.XMLString = function() {};

  }



  /**
  * The HoldCurrentTransaction function places
  * the current transaction on hold and initializes a new transaction.
  *
  * @method HoldCurrentTransaction
  * @param {String} HoldComment Describes the reason the transaction was put on hold.
  * @return {StatusCategoryEnum} Value that indicates whether the operation was a success.
  */
  SessionClass.prototype.HoldCurrentTransaction = function(HoldComment) {};


  /**
  * The InitializeTransaction function initializes a new transaction.
  *
  * @method InitializeTransaction
  * @return {StatusCategoryEnum} Value that indicates whether the operation was a success.
  */
  SessionClass.prototype.InitializeTransaction = function() {};


  /**
  * The OpenRecordset function returns the Microsoft ActiveX Data Objects (ADO)
  * record set retrieved by the specified SQL command.
  *
  * @method OpenRecordSet
  * @param {String} SQL String The SQL command used to determine the record set returned.
  * @param {Boolean} AsReadOnly Specifies whether the returned record set should be read-only. Pass in a value of TRUE to return a read-only record set; otherwise, pass FALSE to return a read/write record set.
  * @return {Recordset} ADO Recordset object that contains the results of the SQL command. The Recordset object will be readable and writable if FALSE is passed into the AsReadOnly parameter; otherwise, the object will be read-only.
  */
  SessionClass.prototype.OpenRecordSet = function(SQL,AsReadOnly) {};


  /**
  * The PurgeMessages function deletes all messages sent before the specified date.
  *
  * @method PurgeMessages
  * @param {Date} BeforeDate Date object that specifies the date before which all sent messages will be deleted.
  * @return {StatusCategoryEnum} Value that indicates whether the operation was a success.
  */
  SessionClass.prototype.PurgeMessages = function(BeforeDate) {};



  /**
  * The RecallTransaction function recalls the specified transaction.
  *
  * @method RecallTransaction
  * @param {RecallEnum} RecallType The RecallEnum enumerated type defines the types of transaction recall.
  * @param {Integer} ID Integer value that contains the ID of the transaction to recall.
  * @return {StatusCategoryEnum} Value that indicates whether the operation was a success.
  */
  SessionClass.prototype.RecallTransaction = function(RecallType,ID) {};



  /**
  * The SendMessage function sends the specified message to the specified cashier.
  *
  * @method SendMessage
  * @param {Integer} Integer value that contains the ID of the cashier to whom to send the message.
  * @param {String} Title String that contains the title of the message to send.
  * @param {String} Text String that contains the text of the message to send.
  * @return {StatusCategoryEnum} Value that indicates whether the operation was a success.
  */
  SessionClass.prototype.SendMessage = function(ToCashierID,Title,Text) {};



  SessionClass.prototype.TimeClockCorrect = function() {};
  SessionClass.prototype.TimeClockPunch = function() {};





