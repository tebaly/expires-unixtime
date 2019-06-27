# Expires time (unix)

Find out if the time has expired

```js

import time from 'tebaly/expires-unixtime';

console.log(time.now()); // 1561555000
console.log(time.left(1561555010)); // 10
console.log(time.left(1561554990)); // -10

console.log(time.expired(1561555010)); // false
console.log(time.expired(1561554990)); // true

```

