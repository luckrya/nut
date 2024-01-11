# `isError`

判断输入是否是 `Error` 类型

## 类型

```ts
declare const isError: (value: unknown) => value is Error;
```

## 例子

```ts
import { isError } from "@rc5/nut";

isError(); // => false
isError(Error); // => false
isError(new Error("MSG")); // => true
```
