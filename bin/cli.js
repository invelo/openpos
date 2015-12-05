#! /usr/bin/env node

  // windows: running "opos blah" in this folder will invoke WSH, not node.
  /*global WScript*/
  if (typeof WScript !== 'undefined') {
    WScript.echo(
      'opos does not work when run\n' +
        'with the Windows Scripting Host\n\n' +
        "'cd' to a different directory,\n" +
        "or type 'opos.cmd <args>',\n" +
        "or type 'node opos <args>'."
    )
    WScript.quit(1)
    return
  }

  process.title = 'OpenPOS';

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