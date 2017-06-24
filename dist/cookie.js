(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.cookie = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  var cookie = {
    set: function set(name, value, opts) {
      if (!opts) opts = {};
      var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
      if (opts.maxAge != null) cookie += '; Max-Age=' + opts.maxAge;
      if (opts.expires != null) cookie += '; Expires=' + (opts.expires.constructor === Date ? opts.expires.toUTCString() : new Date(opts.expires).toUTCString());
      if (opts.path) cookie += '; Path=' + opts.path;
      if (opts.domain) cookie += '; Domain=' + opts.domain;
      if (opts.secure) cookie += '; Secure';
      document.cookie = cookie;
    },
    get: function get(name) {
      var result = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent(name).replace(/[.*()]/g, '\\$&') + '=([^;]*)'));
      return result ? decodeURIComponent(result[1]) : null;
    },
    remove: function remove(name, opts) {
      if (!opts) opts = {};
      opts.maxAge = 0;
      cookie.set(name, '', opts);
    }
  };

  exports.default = cookie;
  module.exports = exports['default'];
});