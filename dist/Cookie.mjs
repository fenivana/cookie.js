var Cookie = /*#__PURE__*/function () {
  function Cookie(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        maxAge = _ref.maxAge,
        expires = _ref.expires,
        path = _ref.path,
        domain = _ref.domain,
        secure = _ref.secure,
        samesite = _ref.samesite;

    this.maxAge = maxAge;
    this.expires = expires;
    this.path = path;
    this.domain = domain;
    this.secure = secure;
    this.samesite = samesite;
  }

  var _proto = Cookie.prototype;

  _proto.set = function set(name, value, _temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$maxAge = _ref2.maxAge,
        maxAge = _ref2$maxAge === void 0 ? this.maxAge : _ref2$maxAge,
        _ref2$expires = _ref2.expires,
        expires = _ref2$expires === void 0 ? this.expires : _ref2$expires,
        _ref2$path = _ref2.path,
        path = _ref2$path === void 0 ? this.path : _ref2$path,
        _ref2$domain = _ref2.domain,
        domain = _ref2$domain === void 0 ? this.domain : _ref2$domain,
        _ref2$secure = _ref2.secure,
        secure = _ref2$secure === void 0 ? this.secure : _ref2$secure,
        _ref2$samesite = _ref2.samesite,
        samesite = _ref2$samesite === void 0 ? this.samesite : _ref2$samesite;

    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if (path) {
      cookie += '; path=' + path;
    }

    if (domain) {
      cookie += '; domain=' + domain;
    } // `max-age` is not compatible with any version of Internet Explorer, Edge and some mobile browsers.
    // so we convert `max-age` to `expires`


    if (maxAge != null) {
      expires = maxAge <= 0 ? 0 : maxAge === Infinity ? maxAge : Date.now() + maxAge * 1000;
    }

    if (expires != null) {
      if (!(expires instanceof Date)) {
        expires = new Date(expires === Infinity ? 'Fri, 31 Dec 9999 23:59:59 GMT' : expires);
      }

      cookie += '; expires=' + expires.toUTCString();
    }

    if (secure) {
      cookie += '; secure';
    }

    if (samesite) {
      cookie += '; samesite=' + samesite;
    }

    document.cookie = cookie;
  };

  _proto.get = function get(name) {
    var result = document.cookie.match(new RegExp('(?:^\\s*|;\\s*)' + encodeURIComponent(name).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*=\\s*([^;]*)'));
    return result ? decodeURIComponent(result[1]) : null;
  };

  _proto.remove = function remove(name, opts) {
    if (opts === void 0) {
      opts = {};
    }

    opts.maxAge = 0;
    this.set(name, '', opts);
  };

  return Cookie;
}();

var cookie = new Cookie();
Cookie.set = cookie.set.bind(cookie);
Cookie.get = cookie.get.bind(cookie);
Cookie.remove = cookie.remove.bind(cookie);

export default Cookie;
