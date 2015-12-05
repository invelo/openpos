var _ = require('lodash')
  , postal = require('postal');

module.exports = signal;

  var channels = {};

function signal(name) {
  return signal.channel(name);
}
signal.reset = function() {
  postal.reset();
  return signal;
};
signal.channel = function(name) {
  channels[name] = channels[name] || postal.channel(name);
  return channels[name];
};
signal.on = function(addr,fn) {
  addr = addr.split('.');
  var name = (addr.length > 1) ? _.first(addr) : '/';
  var topic = (addr.length > 1) ? _.rest(addr).join('.') : addr.join('.');

  return postal.subscribe({
    channel: name,
    topic: topic,
    callback: fn
  });
};
signal.off = function(sub) {
  postal.unsubscribe(sub);
  return signal;
};
signal.emit = function(addr,data) {
  addr = addr.split('.');
  var name = (addr.length > 1) ? _.first(addr) : '/';
  var topic = (addr.length > 1) ? _.rest(addr).join('.') : addr.join('.');

  postal.publish({
    channel: name,
    topic: topic,
    data: data
  });

};

signal.channel('session');
signal.channel('transaction');
signal.channel('ui');
signal.channel('user');

