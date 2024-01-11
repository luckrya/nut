# `isNull`

判断输入是否是 `null`

## 类型

```ts
declare const isNull: (value: unknown) => value is null;
```

## 例子

```ts
import { isNull } from "@rc5/nut";

isNull(); // => false
isNull(null); // => true
```
