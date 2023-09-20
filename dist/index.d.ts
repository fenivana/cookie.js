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
declare class Cookie {
    domain?: string;
    expires?: number | string | Date;
    maxAge?: number;
    partitioned?: boolean;
    path?: string;
    samesite?: SameSite;
    secure?: boolean;
    constructor({ domain, expires, maxAge, partitioned, path, samesite, secure, }?: Options);
    set(name: string, value: string, { domain, expires, maxAge, partitioned, path, samesite, secure, }?: Options): void;
    get(name: string): string | null;
    remove(name: string, opts?: Options): void;
}
declare const cookie: Cookie;
export default cookie;
export { Cookie, cookie };
