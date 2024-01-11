# `isNaN`

判断输入是否是 `NaN`

## 类型

```ts
declare const isNaN: (number: unknown) => boolean;
```

## 例子

```ts
import { isNaN } from "@rc5/nut";

isNaN(); // => false
isNaN(0); // => false
isNaN(NaN); // => true
```
