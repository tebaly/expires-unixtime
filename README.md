# Expires time (unix)

Find out if the time has expired

```js

import time from 'expires-unixtime';

console.log(time.now()); // 1561555000
console.log(time.left(1561555010)); // 10
console.log(time.left(1561554990)); // -10

console.log(time.offset(1561554990)); // 10

console.log(time.expired(1561555010)); // false
console.log(time.expired(1561554990)); // true

```

Использует `unix-timestamp-offset` для работы со временем. Количество секунд (unix time) не миллисекунд, важно. По полученной метке времени определяет, просрочено ли время или сколько осталось или на сколько просрочено. Дополнительно, можно получить метку _timestamp_ для настоящего времени в формате `Unix time`.

- time.now() - метка времени сейчас, unix timestamp
- time.left(time) - сколько осталось секунд до конца
- time.offset(time) - сколько прошло секунд от начала
- time.expired(time) - boolean, истекло ли время уже

Дальше пакет используется для проверки валидности токена JWT по времени EXP (expiration time) 

