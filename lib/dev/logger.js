var debug = require('debug')
  , ms = require('ms')
  , moment = require('moment')
  , _ = require('lodash');


module.exports = OpenLogger;

function OpenLogger(){
  if (!(this instanceof OpenLogger)) return new OpenLogger();



}
OpenLogger.prototype.debug = function(lvl) {
  localStorage.debug = 'opos:'+lvl;
  return localStorage.debug;
};
OpenLogger.prototype.log = debug('opos:info');
OpenLogger.prototype.error = debug('opos:error');
OpenLogger.prototype.info = debug('opos:info');
OpenLogger.prototype.warn = debug('opos:warn');