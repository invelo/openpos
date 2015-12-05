var Hogan = require('hogan.js');

var t = {
  /* jshint ignore:start */
  'button' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");return t.fl(); },partials: {}, subs: {  }}),
  'console' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div style=\"padding-top:20px;padding-bottom:20px;\">");t.b("\n" + i);t.b("  <div class=\"container-fluid\">");t.b("\n" + i);t.b("    <div class=\"row\">");t.b("\n" + i);t.b("      <div class=\"col-xs-12\">");t.b("\n" + i);t.b("        <input type=\"text\" name=\"devConsoleInput\" class=\"form-control input-lg\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"row\">");t.b("\n" + i);t.b("      <div class=\"col-xs-12\">");t.b("\n" + i);t.b("        <div id=\"devConsoleOutput\">");t.b("\n");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'container' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"container\">");t.b("\n");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}),
  'dropdown' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"dropdown\">");t.b("\n" + i);t.b("  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">");t.b(t.v(t.f("parentTitle",c,p,0)));t.b(" <span class=\"caret\"></span></a>");t.b("\n" + i);t.b("  <ul class=\"dropdown-menu\">");t.b("\n" + i);if(t.s(t.d(".",c,p,1),c,p,0,227,271,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <li><a href=\"#\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("  </ul>");t.b("\n" + i);t.b("</li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'form' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");return t.fl(); },partials: {}, subs: {  }}),
  'grid' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");return t.fl(); },partials: {}, subs: {  }}),
  'loading' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div style=\"padding-top:100px;\" class=\"text-center\">");t.b("\n" + i);t.b("  <i class=\"fa fa-spinner fa-pulse fa-4x\"></i>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'modal' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"modal ");if(t.s(t.d("opts.fade",c,p,1),c,p,0,44,48,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("fade");});c.pop();}t.b("\" tabindex=\"-1\" role=\"dialog\">");t.b("\n" + i);t.b("  <div class=\"modal-dialog ");if(t.s(t.d("opts.size",c,p,1),c,p,0,134,153,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("modal-");t.b(t.v(t.d("opts.size",c,p,0)));});c.pop();}if(!t.s(t.d("opts.size",c,p,1),c,p,1,0,0,"")){t.b("modal-lg");};t.b("\">");t.b("\n" + i);t.b("    <div class=\"modal-content\">");t.b("\n" + i);t.b("      <div class=\"modal-header\">");t.b("\n" + i);t.b("        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>");t.b("\n" + i);t.b("        <h4 class=\"modal-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h4>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"modal-body\">");t.b("\n" + i);t.b("        ");t.b(t.t(t.f("content",c,p,0)));t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"modal-footer\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}),
  'navbar' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<nav class=\"navbar navbar-default\">");t.b("\n" + i);t.b("  <div class=\"container-fluid\">");t.b("\n" + i);t.b("    <div class=\"navbar-header\">");t.b("\n" + i);t.b("      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\">");t.b("\n" + i);t.b("        <span class=\"sr-only\">Toggle navigation</span>");t.b("\n" + i);t.b("        <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("        <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("        <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("      </button>");t.b("\n" + i);t.b("      <a class=\"navbar-brand\" href=\"#\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">");t.b("\n" + i);t.b("      <ul id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"nav navbar-nav\">");t.b("\n" + i);if(t.s(t.f("buttons",c,p,1),c,p,0,601,719,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("subbuttons",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<navbutton0",c,p,""));};if(t.s(t.f("subbuttons",c,p,1),c,p,0,682,695,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<dropdown1",c,p,""));});c.pop();}});c.pop();}t.b("      </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</nav>");t.b("\n");return t.fl(); },partials: {"<navbutton0":{name:"navbutton", partials: {}, subs: {  }},"<dropdown1":{name:"dropdown", partials: {}, subs: {  }}}, subs: {  }}),
  'navbutton' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li><a href=\"#\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a></li>");return t.fl(); },partials: {}, subs: {  }}),
  'row' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row\">");t.b("\n");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}),
  'signin' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form class=\"form-signin\">");t.b("\n" + i);t.b("  <label for=\"inputEmail\" class=\"sr-only\">Username</label>");t.b("\n" + i);t.b("  <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" required autocomplete=\"off\" autofocus>");t.b("\n" + i);t.b("  <label for=\"inputPassword\" class=\"sr-only\">Password</label>");t.b("\n" + i);t.b("  <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" required>");t.b("\n" + i);t.b("  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>");t.b("\n" + i);t.b("</form>");return t.fl(); },partials: {}, subs: {  }}),
  'tab' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div role=\"tabpanel\" class=\"tab-pane\" ");if(t.s(t.f("id",c,p,1),c,p,0,45,56,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("  ");if(t.s(t.f("content",c,p,1),c,p,0,79,92,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.t(t.f("content",c,p,0)));});c.pop();}t.b("\n" + i);if(!t.s(t.f("content",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<loading0",c,p,""));};t.b("</div>");return t.fl(); },partials: {"<loading0":{name:"loading", partials: {}, subs: {  }}}, subs: {  }}),
  'tabs' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div ");if(t.s(t.f("id",c,p,1),c,p,0,12,23,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");});c.pop();}t.b(" class=\"tab-content\">");t.b("\n" + i);if(t.s(t.f("tabs",c,p,1),c,p,0,63,79,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<tab0",c,p,"    "));});c.pop();}t.b("</div>");return t.fl(); },partials: {"<tab0":{name:"tab", partials: {}, subs: {  }}}, subs: {  }})
  /* jshint ignore:end */
},
r = function(n) {
  var tn = t[n];
  return function(c, p, i) {
    return tn.render(c, p || t, i);
  };
};
module.exports = {
  'button' : r('button'),
  'console' : r('console'),
  'container' : r('container'),
  'dropdown' : r('dropdown'),
  'form' : r('form'),
  'grid' : r('grid'),
  'loading' : r('loading'),
  'modal' : r('modal'),
  'navbar' : r('navbar'),
  'navbutton' : r('navbutton'),
  'row' : r('row'),
  'signin' : r('signin'),
  'tab' : r('tab'),
  'tabs' : r('tabs')
};