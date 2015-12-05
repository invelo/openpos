'use strict';

var fp2 = require('fingerprintjs2')
  , _ = require('lodash');

exports.init = function() {
  new fp2().get(_.bind(function(result, components){
    this.fingerprint = result;
  },this));

  return this;
};
exports.navigator = function() {
  return window.navigator;
};