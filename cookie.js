/*!
 * cookie v2.1.1
 * http://www.noindoin.com/
 *
 * Copyright (c) 2010 Jiang Fengming <fenix@noindoin.com>
 * Released under the MIT license
 */

var cookie = {
  set: function(name, value, opts) {
    if (!opts)
      opts = {};
    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (opts.maxAge != undefined)
      cookie += '; Max-Age=' + opts.maxAge;
    if (opts.expires != undefined)
      cookie += '; Expires=' + opts.expires.constructor == Date ? opts.expires.toUTCString() : new Date(opts.expires).toUTCString();
    if (opts.path)
      cookie += '; Path=' + opts.path;
    if (opts.domain)
      cookie += '; Domain=' + opts.domain;
    if (opts.secure)
      cookie += '; Secure';
    document.cookie = cookie;
  },

  get: function(name) {
    var result = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent(name).replace(/[.*()]/g, '\\$&') + '=([^;]*)'));
    return result ? decodeURIComponent(result[1]) : null;
  },

  remove: function(name, opts) {
    if (!opts)
      opts = {};
    opts.maxAge = 0;
    cookie.set(name, '', opts);
  }
};

// CommonJS
if (typeof module != 'undefined' && module.exports)
  module.exports = cookie;
