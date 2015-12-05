"use strict";

var _ = require('lodash')
  , rms = require('rms')
  , bridge = rms.bridge
  , rules = rms.rules;


exports.init = function() {
  rms.ping();


  return rms;
};
exports.rms = rms;
exports.bridge = bridge;
exports.rules = rules;