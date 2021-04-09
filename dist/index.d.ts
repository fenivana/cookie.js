export declare type Options = {
    maxAge?: number;
    expires?: number | string | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    samesite?: string;
};
declare class Cookie {
    maxAge?: number;
    expires?: number | string | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    samesite?: string;
    constructor({ maxAge, expires, path, domain, secure, samesite }?: Options);
    set(name: string, value: string, { maxAge, expires, path, domain, secure, samesite }?: Options): void;
    get(name: string): string | null;
    remove(name: string, opts?: Options): void;
}
declare const cookie: Cookie;
export { Cookie, cookie };
