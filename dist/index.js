class Cookie {
    constructor({ domain, expires, maxAge, partitioned, path, sameSite, secure, } = {}) {
        this.domain = domain;
        this.expires = expires;
        this.maxAge = maxAge;
        this.partitioned = partitioned;
        this.path = path;
        this.sameSite = sameSite;
        this.secure = secure;
    }
    set(name, value, { domain = this.domain, expires = this.expires, maxAge = this.maxAge, partitioned = this.partitioned, path = this.path, sameSite = this.sameSite, secure = this.secure, } = {}) {
        let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (domain) {
            cookie += "; Domain=" + domain;
        }
        if (expires) {
            if (expires.constructor === Number) {
                expires = new Date(expires);
            }
            cookie +=
                "; Expires=" +
                    (expires instanceof Date ? expires.toUTCString() : expires);
        }
        if (maxAge || maxAge === 0) {
            cookie += "; Max-Age=" + maxAge;
        }
        if (partitioned) {
            cookie += "; Partitioned";
        }
        if (path) {
            cookie += "; Path=" + path;
        }
        if (sameSite) {
            cookie += "; SameSite=" + sameSite;
        }
        if (secure) {
            cookie += "; Secure";
        }
        document.cookie = cookie;
    }
    get(name) {
        const result = document.cookie.match(new RegExp("(?:^\\s*|;\\s*)" +
            encodeURIComponent(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
            "\\s*=\\s*([^;]*)"));
        return result ? decodeURIComponent(result[1]) : undefined;
    }
    remove(name, opts = {}) {
        opts.maxAge = 0;
        this.set(name, "", opts);
    }
}
const cookie = new Cookie();
export default cookie;
export { Cookie, cookie };
