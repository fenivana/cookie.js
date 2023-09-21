export type SameSite = "Lax" | "Strict" | "None";

export type Options = {
  domain?: string;
  expires?: number | string | Date;
  maxAge?: number;
  partitioned?: boolean;
  path?: string;
  sameSite?: SameSite;
  secure?: boolean;
};

class Cookie {
  domain?: string;
  expires?: number | string | Date;
  maxAge?: number;
  partitioned?: boolean;
  path?: string;
  sameSite?: SameSite;
  secure?: boolean;

  constructor({
    domain,
    expires,
    maxAge,
    partitioned,
    path,
    sameSite,
    secure,
  }: Options = {}) {
    this.domain = domain;
    this.expires = expires;
    this.maxAge = maxAge;
    this.partitioned = partitioned;
    this.path = path;
    this.sameSite = sameSite;
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
      sameSite = this.sameSite,
      secure = this.secure,
    }: Options = {}
  ): void {
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

  get(name: string): string | undefined {
    const result = document.cookie.match(
      new RegExp(
        "(?:^\\s*|;\\s*)" +
          encodeURIComponent(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
          "\\s*=\\s*([^;]*)"
      )
    );

    return result ? decodeURIComponent(result[1]) : undefined;
  }

  remove(name: string, opts: Options = {}): void {
    opts.maxAge = 0;
    this.set(name, "", opts);
  }
}

const cookie = new Cookie();

export default cookie;
export { Cookie, cookie };
