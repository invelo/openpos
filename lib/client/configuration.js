var _ = require('lodash')
  , ms = require('ms')
  , parse = JSON.parse
  , cookie = require('js-cookie')
  , store = require('store')
  , dev = require('dev')()
  , moment = require('moment')
  , debug = dev.console
  , stringify = JSON.stringify
  , uuid = require('uuid');

  module.exports = OpenConfig;

  var configs = {};

  function OpenConfig(ns){
    if (!(this instanceof OpenConfig)) return new OpenConfig(ns);

    this.ns = ns || _.uniqueId('ns_');
    this.created = moment();
    this.updated = moment();
    configs[this.ns] = {};

  }
  OpenConfig.prototype.touch = function() {
    this.updated = moment();
    debug.log('Configuration store '+this.ns+' was updated');
    return true;
  };
  OpenConfig.prototype.get = function(path,def) {
    if(!path && !def) return configs[this.ns];
    var val = _.get(configs[this.ns],path) || def;
    this.touch();
    return val || void(0);
  };
  OpenConfig.prototype.set = function(path,val) {
    _.set(configs[this.ns],path,val);
    this.touch();
    return this;
  };
  OpenConfig.prototype.del = function(path) {
    if(this.get(path)) this.set(path,void(0));
    this.touch();
    return this;
  };
  OpenConfig.prototype.clear = function() {
    configs[this.ns] = void(0);
    this.touch();
    return this;
  };
  OpenConfig.prototype.save = function() {
    window.localStorage.setItem(this.ns,stringify(configs[this.ns]));
    this.touch();
    return this;
  };
  OpenConfig.prototype.dump = function() {
    window.localStorage.removeItem(this.ns);
    this.touch();
    return this;
  };

