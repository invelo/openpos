'use strict';

var _ = require('lodash')
  , $ = require('jquery')
  , tab = require('./tab')
  , modal = require('./modal')
  , table = require('./table')
  , templates = require('templates');

exports.init = function() {

  $(document).on('click',':button',function(e){
    try {
      window.pos.bridge(this.value);
    }catch(err){};
  });

  $(document).on('change','select',function(e){
    try {
      window.pos.bridge(this.value);
    }catch(err){};
  });

  $(document).on('change','input',function(e){
    try {
      window.pos.bridge(this.value);
    }catch(err){};
  });

  $(document).on('submit','form',function(e){
    try {
      e.preventDefault();
      console.log(this);
      return false;
    }catch(err){}
  });

  document.addEventListener("DOMContentLoaded", _.bind(function(event) {


    tab.create({
      name: 'console',
      title:'Development Console',
      id: 'dev-console',
      dest: '#fullscreen',
      content: templates.console()
    })
      .insert()
      .show();

    tab.create({
      name: 'signin',
      title:'User Login',
      id: 'auth-signin',
      dest: '#fullscreen',
      content: templates.signin()
    })
      .insert();

    tab.create({
      name: 'loading',
      title:'Tab Loading',
      id: 'app-loading',
      dest: '#fullscreen',
      content: templates.loading()
    })
      .insert();

  },this));

  document.addEventListener("contextmenu", _.bind(function(e) {
    console.log(e);
    e.preventDefault();
    return false;
  },this));

  document.addEventListener("dblclick", _.bind(function(e) {
    console.log(e);
    e.preventDefault();
    return false;
  },this));


};
exports.tabs = tab;
exports.modals = modal;
exports.tables = table;
exports.templates = templates;




