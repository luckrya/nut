import { isString } from "./data-type";
import { THOUSANDS_REGEXP } from "./regexp";

export function checkSafeInteger(num: number) {
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    console.warn("输入的数字超出了JavaScript安全值的范围");

    return false;
  }
  return true;
}

export function toThousands(num: string | number) {
  if (typeof num === "number" && checkSafeInteger(num)) {
    return num.toLocaleString();
  } else if (isString(num)) {
    const [l, r] = num.split(".");
    return `${l.trim().replace(THOUSANDS_REGEXP, "$1,")}${
      r ? `.${r.trim()}` : ""
    }`;
  }
}
