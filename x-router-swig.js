var swig = require('swig');

var compiled = {};
module.exports = (function(defaults) {
  defaults = defaults || {};
  return function(src, options, done) {
    if( !src ) return done(new Error('missing src'));
    if( typeof src !== 'string' ) return done(new TypeError('src must be a string(url)'));
    
    var target = options.target;
    var cache = options.cache === true ? true : (defaults.cache === true ? true : false);
    
    var render = function(tpl, locals) {
      var html = tpl(locals);
      target.innerHTML = html;
      done();
    };
    
    if( cache && compiled[src] ) render(compiled[src], options.locals || {});
    else this.util.ajax(src, function(err, html) {
      if( err ) return done(err);
      
      var template = swig.compile(html, defaults.options);
      if( cache ) compiled[src] = template;
      render(template, options.locals || {});
    });
  };
});