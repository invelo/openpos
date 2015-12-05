var _ = require('lodash')
  , ms = require('ms')
  , parse = JSON.parse
  , cookie = require('js-cookie')
  , moment = require('moment')
  , stringify = JSON.stringify
  , uuid = require('uuid');


  var lockers = window.lockers = {};

  module.exports = storage;

  function storage(ns,opts) {
    var ns = (_.isString(ns)) ? ns : _.uniqueId('db_');
    var opts = _.defaults(opts || {},{
      write: true,
      read: true,
      log: false,
      overwrite: true,
      expires: false,
      type: 'session'
    });
    lockers[ns] = lockers[ns] || {};

    function locker() {
      return _.get(lockers,ns) || {};
    }
    function get(path) {
      return (!path) ? locker() : _.get(locker(),path);
    }
    function exists(path) {
      return (_.isUndefined(get(path))) ? false : true;
    }
    function readable() {
      return opts.read === true ? true : false;
    }
    function writable(path,force) {
      if(!opts.write) return false;
      if(force === true) return true;
      if(!opts.overwrite && exists(path)) return false;
      return true;
    }
    function set(path,val,force) {
      if(!_.isString(path)) return false;
      if(!writable(path,force)) return false;
      _.set(locker(),path,val);
      return true;
    }
    function merge(obj) {
      _.merge(locker(),obj);
      return true;
    }
    function clear() {
      lockers[ns] = void(0);
      return true;
    }

    function OpenStore() {
      if (!(this instanceof OpenStore)) return new OpenStore();



    }
    OpenStore.prototype.info = function() {
      return opts;
    };
    OpenStore.prototype.get = function(path,def) {
      var val = get(path) || def;
      return val || null;
    };
    OpenStore.prototype.set = function(path,val,force) {
      return (arguments.length === 1 && _.isPlainObject(path)) ? merge(path) : set(path,val,force);
    };
    OpenStore.prototype.del = function(path) {
      if(!writable()) return false;
      return set(path,void(0),true);
    };
    OpenStore.prototype.clear = function() {
      return clear();
    };
    OpenStore.prototype.toJSON = function() {
      return locker();
    };

    return new OpenStore();

  };
  storage.lockers = function() {
    return _.keys(lockers);
  };

  function OpenSessionStore(ns,opts) {
    if (!(this instanceof OpenSessionStore)) return new OpenSessionStore(ns,opts);

    this.type = 'session';
    this.ns = ns || _.uniqueId('session_');
  };
  function OpenLocalStore(ns,opts) {
    if (!(this instanceof OpenLocalStore)) return new OpenLocalStore(ns);
  };
  function OpenCookieStore(ns,opts) {
    if (!(this instanceof OpenCookieStore)) return new OpenCookieStore(ns);
  };
