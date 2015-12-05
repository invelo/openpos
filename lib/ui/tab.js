var templates = require('templates')
  , tabs = {}
  , $ = require('jquery')
  , uuid = require('uuid')
  , _ = require('lodash');



exports.create = function(opts) {
  if(this[opts.name]) return false;
  var t = new OpenTab(opts);
  this[opts.name] = t;

  return t;
};
exports.list = function() {
  return _.where(this,{ type: 'pane'});
};
exports.hide = function(name) {
  this[name].hide();
  return tabs;
};
exports.show = function(name) {
  this[name].show();
  return tabs;
};
exports.containers = function() {
  return $('.tab-content');
};
exports.panes = function() {
  return $('.tab-pane');
};


function OpenTab(opts) {
  if (!(this instanceof OpenTab)) return new OpenTab();

  _.defaults(this,(opts||{}),{
    title: '',
    data: {},
    uuid: uuid.v1(),
    content: null
  });

  this.id = _.uniqueId('tab_');
  this.type = 'pane';
  this.created = false;
  this.container = $(opts.dest);
  this.element = null;

}
OpenTab.prototype.active = function() {
  return $(this.element).hasClass('active');
};
OpenTab.prototype.tpl = templates.tab;
OpenTab.prototype.render = function() {
  return this.tpl(this);
};
OpenTab.prototype.show = function() {
  $('.tab-pane.active').removeClass('active');
  this.element.addClass('active');
  this.element.parents('.tab-pane').addClass('active');
  return this;
};
OpenTab.prototype.hide = function() {
  this.element.removeClass('active');
  return this;
};
OpenTab.prototype.insert = function() {

  this.container.append(this.render());
  this.element = $('#'+this.id);
  this.created = true;
  return this;
};