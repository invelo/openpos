
var _ = require('lodash')
  , grid = require('./grid')
  , entry = require('./entry')
  , item = require('./item');


module.exports = OpenTransaction;

function OpenTransaction(){
  if (!(this instanceof OpenTransaction)) return new OpenTransaction();


}
OpenTransaction.prototype.tender = function() {

};
OpenTransaction.prototype.customer = function() {

};