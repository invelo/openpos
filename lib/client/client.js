'use strict';

var _ = require('lodash')
  , pulse = require('pulse')()
  , dev = require('dev')()
  , debug = require('logger')();

exports.init = _.once(function() {
  debug.log('Initializing OpenClient');
  return this;
});