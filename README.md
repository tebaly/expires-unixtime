# Expires time (unix)

Find out if the time has expired

```js

import time from 'expires-unixtime';

console.log(time.now()); // 1561555000
console.log(time.left(1561555010)); // 10
console.log(time.left(1561554990)); // -10

console.log(time.expired(1561555010)); // false
console.log(time.expired(1561554990)); // true

```


Использует `unix-timestamp-offset` для работы со временем. Количество секунд (unix time) не миллисекунд, важно. 

time.now() - метка времени сейчас, unix timestamp
time.left(time) - сколько осталось секунд до конца
time.expired(time) - boolean, истекло ли время уже

Дальше пакет используется для проверки валидности токена JWT по времени EXP (expiration time) 

