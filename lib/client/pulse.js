
var io = require('socket.io-client');

module.exports = OpenPulse;

function OpenPulse(opts){
  if (!(this instanceof OpenPulse)) return new OpenPulse();
  this.opts = opts;

}
OpenPulse.prototype = io;