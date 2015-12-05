var _ = require('lodash')
  , signal = require('signal')
  , transaction = require('./transaction')
  , customer = require('./customer')
  , cashier = require('./cashier')
  , place = require('./place')
  , register = require('./register')
  , pay = require('./pay')


module.exports = OpenSession;

function OpenSession(){
  if (!(this instanceof OpenSession)) return new OpenSession();

  this.transaction = transaction();
  this.customer = customer();
  this.place = place();
  this.register = register();
  this.pay = pay();
  this.cashier = cashier();
}
OpenSession.prototype.cancel = function() {};
OpenSession.prototype.init = function() {};
_.mixin(OpenSession.prototype,signal);
