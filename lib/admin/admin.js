'use strict';

var network = require('./network')
  , devices = require('./devices')
  , browser = require('./browser')
  , os = require('./os')
  , pkg = require('pkg')
  , config = require('./config')
  , semver = require('semver')
  , modules = require('./modules')
  , schemas = require('./schemas')
  , themes = require('./themes');

exports.modules = modules;
exports.config = config;
exports.schemas = schemas;
exports.themes = themes;
exports.devices = devices;
exports.browser = browser.init();
exports.os = os;
exports.network = network;
exports.info = function() {
  return pkg;
};