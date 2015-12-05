var _ = require('lodash')
  , debug = require('logger')()
  , classid = 'clsid:44C4C3AC-D0F1-11D2-919D-006008C88FC3'
  , attrName = 'classid'
  , tagName = 'OBJECT'
  , attempts = 25
  , delay = 50
  , element = discover(document,tagName,classid)
  , connected = false;

function status() {
  return {
    element: element,
    connected: connected,
    attempts: attempts
  };
}
function ping() {
  if(!attempts) return status();
  attempts--;
  return setTimeout(function() {
    if(!validate(element)) {
      return ping();
    }else{
      attempts = 0;
      connected = true;
    }
  },delay);
}
function discover(scope,tn,str) {
  if(!scope || !str || !tn) return null;

  var results = scope.getElementsByTagName(tn);
  var el = null;

  for(var i=0; i<results.length; i++) {
    if(results[i].getAttribute(attrName) === str) {
      el = results[i];
      break;
    }
  }

  return el;
}
function validate(prxy) {
  var isValid = false;
  try {
    isValid = _.isFunction(prxy,'RequestQSRules');
    isValid = prxy.RequestQSRules().IsPOS;
  }catch(err){
    isValid = false;
  }

  return isValid;
}

function proxy() {
  return (connected) ? element : status();
}
proxy.rules = function() {
  return (connected) ? _.result(proxy(),'RequestQSRules') : status();
};
proxy.bridge = proxy;
proxy.context = function(path) {
  if(!connected) return status();
  return function() {
    return (_.isString(path)) ? _.get(proxy.rules(),path) : proxy.rules();
  };
};
proxy.reconnect = function() {
  attempts = 0;
  element = discover(document,tagName,classid);
  connected = false;
  return ping();
};
proxy.status = status;
proxy.ping = ping;

module.exports = proxy;
