export type SameSite = "lax" | "strict" | "none";

export type Options = {
  domain?: string;
  expires?: number | string | Date;
  maxAge?: number;
  partitioned?: boolean;
  path?: string;
  samesite?: SameSite;
  secure?: boolean;
};

class Cookie {
  domain?: string;
  expires?: number | string | Date;
  maxAge?: number;
  partitioned?: boolean;
  path?: string;
  samesite?: SameSite;
  secure?: boolean;

  constructor({
    domain,
    expires,
    maxAge,
    partitioned,
    path,
    samesite,
    secure,
  }: Options = {}) {
    this.domain = domain;
    this.expires = expires;
    this.maxAge = maxAge;
    this.partitioned = partitioned;
    this.path = path;
    this.samesite = samesite;
    this.secure = secure;
  }

  set(
    name: string,
    value: string,
    {
      domain = this.domain,
      expires = this.expires,
      maxAge = this.maxAge,
      partitioned = this.partitioned,
      path = this.path,
      samesite = this.samesite,
      secure = this.secure,
    }: Options = {}
  ): void {
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

  get(name: string): string | null {
    const result = document.cookie.match(
      new RegExp(
        "(?:^\\s*|;\\s*)" +
          encodeURIComponent(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
          "\\s*=\\s*([^;]*)"
      )
    );

    return result ? decodeURIComponent(result[1]) : null;
  }

  remove(name: string, opts: Options = {}): void {
    opts.maxAge = 0;
    this.set(name, "", opts);
  }
}

const cookie = new Cookie();

export default cookie;
export { Cookie, cookie };
