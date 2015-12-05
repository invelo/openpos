var debug = require('debug')
  , ms = require('ms')
  , moment = require('moment')
  , _ = require('lodash');

module.exports = OpenDev;

function OpenDev(){
  if (!(this instanceof OpenDev)) return new OpenDev();



}
OpenDev.prototype.console = new OpenConsole();



function OpenConsole(){
  if (!(this instanceof OpenConsole)) return new OpenConsole();



}
OpenConsole.prototype.debug = function(lvl) {
  localStorage.debug = 'opos:'+lvl;
  return localStorage.debug;
};
OpenConsole.prototype.log = debug('opos:info');
OpenConsole.prototype.error = debug('opos:error');
OpenConsole.prototype.info = debug('opos:info');
OpenConsole.prototype.warn = debug('opos:warn');



