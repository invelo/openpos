'use strict';

var pkg = require('../../package.json')
  , ini = pkg.openpos;

var http = require('@pos/httpd')
  , ui = require('@pos/ui')
  , admin = require('@pos/admin')
  , machine = require('@pos/machine')
  , place = require('@pos/place')
  , org = require('@pos/org')

var server = http.init(ini.server);

http.namespace('/hello',function() {
  server.get('*', function(req,res,next){
    res.send('hello');
  });
});