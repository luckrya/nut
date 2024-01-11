# `isNumber`

判断输入是否是 `number` 类型

## 类型

```ts
export declare const isNumber: (value: unknown) => value is number;
```

## 例子

```ts
import { isNumber } from "@rc5/nut";

isNumber(); // => false
isNumber(false); // => false
isNumber(100); // => true
isNumber(NaN); // => true
```
