# Cookie utility for browser

## Usage
```js
import { Cookie, cookie } from 'cookie.js';

// set cookie
cookie.set('cookie', 'delicious');

// get cookie
console.log(cookie.get('cookie'));

// remove cookie
cookie.remove('cookie');

// Non-ASCII chars and special chars
cookie.set(' 曲奇,;=.*+?^${}()|[]\\ ', ' 好吃,;=.*+?^${}()|[]\\ ');
console.log(JSON.stringify(cookie.get(' 曲奇,;=.*+?^${}()|[]\\ ')));

// options
cookie.set('hello', 'world', {
  path: '/',
  domain: 'example.com',
  secure: true,
  samesite: 'lax'
});

// use same options as cookie.set()
cookie.remove('hello', {
  path: '/',
  domain: 'example.com',
  secure: true,
  samesite: 'lax'
});

// max-age param
// 60 seconds
cookie.set('maxAge.60', '60', {
  maxAge: 60
});

// same as cookie.remove()
cookie.set('maxAge.0', '0', {
  maxAge: 0
});

// expires param
// support Date object, timestamp, UTCString
cookie.set('expires.Date', 'Date', {
  expires: new Date(Date.now() + 60 * 1000)
});

cookie.set('expires.timestamp', 'timestamp', {
  expires: Date.now() + 60 * 1000
});

cookie.set('expires.UTCString', 'UTCString', {
  expires: new Date(Date.now() + 60 * 1000).toUTCString()
});

// same as cookie.remove()
cookie.set('expires.pastTime', 'pastTime', {
  expires: Date.now() - 1
});

// instance with default options
const ck = new Cookie({
  maxAge: 60,
  path: '/',
  domain: 'example.com',
  samesite: 'lax'
});

ck.set('instance', 'with defaults');
ck.remove('instance');
```

## License
MIT
