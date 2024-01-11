# `isString`

判断输入是否是 `string` 类型

## 类型

```ts
declare const isString: (value: unknown) => value is string;
```

## 例子

```ts
import { isString } from "@rc5/nut";

isString(); // => false
isString("true"); // => true
```
