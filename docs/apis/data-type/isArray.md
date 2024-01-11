# `isArray`

判断输入是否是 `array` 类型

## 类型

```ts
declare const isArray: (arg: any) => arg is any[];
```

## 例子

```ts
import { isArray } from "@rc5/nut";

isArray(); // => false
isArray(false); // => false
isArray({}); // => false
isArray([]); // => true
```
