# `isFunction`

判断输入是否是 `Function` 类型

## 类型

```ts
declare const isFunction: (value: unknown) => value is Function;
```

## 例子

```ts
import { isFunction } from "@rc5/nut";

isFunction([]); // false
isFunction(function () {}); // true
isFunction(Function); // true
isFunction(Date); // true
```
