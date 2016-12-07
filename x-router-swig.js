var swig = require('swig');

var compiled = {};
module.exports = (function(defaults) {
  defaults = defaults || {};
  
  return function(options, done) {
    var target = options.target;
    var src = options.src;
    var html = options.html;
    var cache = options.cache === true ? true : (defaults.cache === true ? true : false);
    
    var render = function(err, html) {
      if( err ) return done(err);
      if( typeof html === 'object' && html.html ) html = html.html;
      if( typeof html !== 'string' ) return done(new Error('html must be a string'));
      
      var tpl = compiled[src] || swig.compile(html, defaults.options);
      if( src ) compiled[src] = tpl;
      
      target.innerHTML = tpl(options.locals || {});
      done();
    };
    
    if( src ) this.util.ajax(src, render);
    else if( html ) render(null, html);
    else done(new Error('missing src or html'));
  };
});