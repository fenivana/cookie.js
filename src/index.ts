export type Options = {
  maxAge?: number;
  expires?: number | string | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  samesite?: string;
};

class Cookie {
  maxAge?: number;
  expires?: number | string | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  samesite?: string;

  constructor({ maxAge, expires, path, domain, secure, samesite }: Options = {}) {
    this.maxAge = maxAge;
    this.expires = expires;
    this.path = path;
    this.domain = domain;
    this.secure = secure;
    this.samesite = samesite;
  }

  set(name: string, value: string, {
    maxAge = this.maxAge,
    expires = this.expires,
    path = this.path,
    domain = this.domain,
    secure = this.secure,
    samesite = this.samesite
  }: Options = {}): void {
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if (path) {
      cookie += ';path=' + path;
    }

    if (domain) {
      cookie += ';domain=' + domain;
    }

    if (maxAge || maxAge === 0) {
      cookie += ';max-age=' + maxAge;
    }

    if (expires) {
      if (expires.constructor === Number) {
        expires = new Date(expires);
      }

      cookie += ';expires=' + (expires instanceof Date ? expires.toUTCString() : expires);
    }

    if (secure) {
      cookie += ';secure';
    }

    if (samesite) {
      cookie += ';samesite=' + samesite;
    }

    document.cookie = cookie;
  }

  get(name: string): string | null {
    const result = document.cookie.match(new RegExp('(?:^\\s*|;\\s*)' +
      encodeURIComponent(name).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*=\\s*([^;]*)'));

    return result ? decodeURIComponent(result[1]) : null;
  }

  remove(name: string, opts: Options = {}): void {
    opts.maxAge = 0;
    this.set(name, '', opts);
  }
}

const cookie = new Cookie();

export default cookie;
export { Cookie, cookie };
