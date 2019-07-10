# Cookie utility for browser

## Usage
```js
import Cookie from 'cookie.js'

// set cookie
Cookie.set('cookie', 'delicious')

// get cookie
console.log(Cookie.get('cookie'))

// Non-ASCII chars and special chars
Cookie.set(' 曲奇,;=.*+?^${}()|[]\\ ', ' 好吃,;=.*+?^${}()|[]\\ ')
console.log(JSON.stringify(Cookie.get(' 曲奇,;=.*+?^${}()|[]\\ ')))

// options
Cookie.set('hello', 'world', {
  path: '/',
  domain: 'dev.local',
  // secure: true, // unable to test under local http env
  samesite: 'lax'
})

// remove cookies
Cookie.remove('cookie')

// use same options as Cookie.set()
Cookie.remove('hello', {
  path: '/',
  domain: 'dev.local',
  samesite: 'lax'
})

// max-age param
// `max-age` is not compatible with any version of Internet Explorer, Edge and some mobile browsers.
// so we will convert `max-age` to `expires` under the hood.
Cookie.set('maxAge.Infinity', 'Infinity', {
  maxAge: Infinity
})

Cookie.set('maxAge.60', '60', {
  maxAge: 60
})

Cookie.set('maxAge.0', '0', {
  maxAge: 0
})

Cookie.set('maxAge.-1', '-1', {
  maxAge: -1
})

// expires param
Cookie.set('expires.Infinity', 'Infinity', {
  expires: Infinity
})

Cookie.set('expires.timestamp', 'timestamp', {
  expires: Date.now() + 60 * 1000
})

Cookie.set('expires.pastTime', 'pastTime', {
  expires: Date.now() - 1
})

Cookie.set('expires.UTCString', 'UTCString', {
  expires: new Date(Date.now() + 60 * 1000).toUTCString()
})

Cookie.set('expires.ISOString', 'ISOString', {
  expires: new Date(Date.now() + 60 * 1000).toISOString()
})

Cookie.set('expires.LocaleString', 'LocaleString', {
  expires: new Date(Date.now() + 60 * 1000).toLocaleString()
})

// instance with default options
const cookie = new Cookie({
  maxAge: 60,
  path: '/',
  domain: 'dev.local',
  samesite: 'lax'
})

// set
cookie.set('instance', 'with defaults')

// get
cookie.get('instance')

// remove
cookie.remove('instance')
```

## License
MIT
