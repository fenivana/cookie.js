const cookie = {
  set(name, value, opts) {
    if (!opts) opts = {}
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    if (opts.maxAge != null) cookie += '; Max-Age=' + opts.maxAge
    if (opts.expires != null) cookie += '; Expires=' + (opts.expires.constructor === Date ? opts.expires.toUTCString() : new Date(opts.expires).toUTCString())
    if (opts.path) cookie += '; Path=' + opts.path
    if (opts.domain) cookie += '; Domain=' + opts.domain
    if (opts.secure) cookie += '; Secure'
    document.cookie = cookie
  },

  get(name) {
    const result = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent(name).replace(/[.*()]/g, '\\$&') + '=([^;]*)'))
    return result ? decodeURIComponent(result[1]) : null
  },

  remove(name, opts) {
    if (!opts) opts = {}
    opts.maxAge = 0
    cookie.set(name, '', opts)
  }
}

export default cookie
