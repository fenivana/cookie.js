class Cookie {
    constructor({ domain, expires, maxAge, partitioned, path, samesite, secure, } = {}) {
        this.domain = domain;
        this.expires = expires;
        this.maxAge = maxAge;
        this.partitioned = partitioned;
        this.path = path;
        this.samesite = samesite;
        this.secure = secure;
    }
    set(name, value, { domain = this.domain, expires = this.expires, maxAge = this.maxAge, partitioned = this.partitioned, path = this.path, samesite = this.samesite, secure = this.secure, } = {}) {
        let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (domain) {
            cookie += ";domain=" + domain;
        }
        if (expires) {
            if (expires.constructor === Number) {
                expires = new Date(expires);
            }
            cookie +=
                ";expires=" +
                    (expires instanceof Date ? expires.toUTCString() : expires);
        }
        if (maxAge || maxAge === 0) {
            cookie += ";max-age=" + maxAge;
        }
        if (partitioned) {
            cookie += ";partitioned";
        }
        if (path) {
            cookie += ";path=" + path;
        }
        if (samesite) {
            cookie += ";samesite=" + samesite;
        }
        if (secure) {
            cookie += ";secure";
        }
        document.cookie = cookie;
    }
    get(name) {
        const result = document.cookie.match(new RegExp("(?:^\\s*|;\\s*)" +
            encodeURIComponent(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
            "\\s*=\\s*([^;]*)"));
        return result ? decodeURIComponent(result[1]) : null;
    }
    remove(name, opts = {}) {
        opts.maxAge = 0;
        this.set(name, "", opts);
    }
}
const cookie = new Cookie();
export default cookie;
export { Cookie, cookie };
