# `isFalse`

判断输入是否是 `false`

## 类型

```ts
declare const isFalse: (value: unknown) => value is false;
```

## 例子

```ts
import { isFalse } from "@rc5/nut";

isFalse(); // => false
isFalse(true); // => false
isFalse(false); // => true
```
