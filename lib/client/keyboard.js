"use strict";

var _ = require('lodash')
  , $ = require('jquery')
  , kb = require('keyboardjs');

module.exports = {};

var d = [
  'f1',
  'f2',
  'f3',
  'f4',
  'f5',
  'f6',
  'f7',
  'f8',
  'f9',
  'f10',
  'f11',
  'f12'
];


for(var i=0; i<d.length; i++) {
  d.push(String('ctrl>').concat(d[i]));
}

console.log(d);

// kb.watch(window.root,document,window);
// kb.on(d, function(e) {
//   e.preventDefault();
//   e.preventRepeat();
//   console.log(e);
//   $('#devConsoleOutput').append('<span>'+e.pressedKeys.join('.')+'</span><br/>');
//   return false;
// })