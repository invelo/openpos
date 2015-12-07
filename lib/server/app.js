'use strict';

var _ = require('lodash')
  , util = require('@pos/utils');


var pkg = require('../../package.json')
  , ini = util.envConfig(process.env);

var http = require('@pos/httpd')
  , server = http.init(ini);

var admin = require('@pos/admin').init(ini,process)
  , ui = require('@pos/ui')(server,ini)
  , core = require('@pos/core')
  , rms = require('@pos/rms')
  , machine = require('@pos/machine')
  , place = require('@pos/place')
  , org = require('@pos/org');

var plugins = require('@pos/module');

  plugins.core = plugins.register('core',[
    ui,
    core,
    rms,
    admin,
    machine,
    place,
    org
  ]);

  plugins.libs = plugins.register('libs',[
  ]);