#! /usr/bin/env node

var program = require('commander')
  , _ = require('lodash')
  , pkg = require('../package.json')
  , fs = require('fs-extra');

program
  .version(pkg.version)
  .command('config','get and set configuration');

program.parse(process.argv);

if(!program.args.length) {
  console.log(program.helpInformation());
}