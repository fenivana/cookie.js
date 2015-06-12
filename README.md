# Cookie utility for browser

## Usage
```js
// set a session cookie
cookie.set('sessionId', 123);

// get a cookie
cookie.get('sessionId');

// set a cookie with attributes
cookie.set('attrs', 'ok', {
  maxAge: 500,
  expires: new Date('2015-05-13T07:30:00Z'),
  path: '/foo',
  domain: 'www.example.com',
  secure: true
});

// remove a cookie
cookie.remove('foo');

// remove a cookie with attributes
cookie.remove('foo', {
  path: '/foo',
  domain: 'www.example.com'
});

// set cookie expires with GMT date string
cookie.set('expiresGMT', 'ok', {
  expires: 'Wed, 13 May 2015 07:30:00 GMT'
});

// set cookie expires with ISO date string
cookie.set('expiresISODate', 'ok', {
  expires: '2015-05-13T07:30:00Z'
});

// set cookie expires with local date format
cookie.set('expiresLocalDate', 'ok', {
  expires: '2015-05-13 07:30:00'
});

// set cookie expires with milliseconds timestamp
cookie.set('expiresTimestamp', 'ok', {
  expires: 1431922243259
});
```

## License
MIT
