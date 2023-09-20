# cookie.js: document.cookie for human

## Usage

### Default Cookie Instance

```js
import cookie from 'cookie.js';
```

You can use the default `cookie` instance to set, get, and remove cookies. The default instance is created with empty options.

### Creating a Cookie Instance

```js
import { Cookie } from 'cookie.js';

const cookieInstance = new Cookie({
  domain: 'example.com',
  path: '/',
  secure: true,
  // ...other options
});
```

You can create a new instance of the `Cookie` class optionally passing an `Options` object to set default properties for the cookies it manages:

### Setting a Cookie

To set a cookie, you can use the `set` method, passing the name and value of the cookie, along with an optional `Options` object to set specific properties for that cookie:

```js
cookie.set('name', 'value', {
  maxAge: 3600,
  samesite: 'lax',
  // ...other options
});
```

### Getting a Cookie

To retrieve the value of a cookie, you can use the `get` method, passing the name of the cookie:

```js
const value = cookie.get('name');
console.log(value);
```

### Removing a Cookie

To remove a cookie, you can use the `remove` method, passing the name of the cookie and optionally, an `Options` object to specify removal conditions:

```js
cookie.remove('name');
```


## API Reference

### Class `Cookie`

- `constructor(options?: Options)`: Creates a new `Cookie` instance with the specified options.

- `set(name: string, value: string, options?: Options)`: Sets a cookie with the specified name, value, and options. `value` will be encoded using `encodeURIComponent()`.

- `get(name: string)`: Retrieves the value of the cookie with the specified name.

- `remove(name: string, options?: Options)`: Removes the cookie with the specified name, using the specified options.

### `Options`
Representing the different options that can be set for a cookie, including:
  - `domain`: A `string` representing the domain for the cookie.
  - `expires`: A `number`, `string`, or `Date` object representing when the cookie should expire. If specified as a `number`, it is interpreted as a timestamp (the number of **milliseconds** since midnight at the beginning of January 1, 1970, UTC — a.k.a. the epoch). If specified as a `string`, it should adhere to the format returned by the `Date.toUTCString()` method.
  
  - `maxAge`: A `number` representing the maximum age of the cookie in **seconds**.
  - `partitioned`: A `boolean` indicating whether the cookie is partitioned.
  - `path`: A `string` representing the path for the cookie.
  - `samesite`: A `string` representing the SameSite attribute for the cookie. The possible values for this attribute are `lax`, `strict`, or `none`.
  - `secure`: A `boolean` indicating whether the cookie should be transmitted over secure channels only.

## License
[MIT](LICENSE)
