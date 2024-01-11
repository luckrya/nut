import { SCOPED_PKG_REGEXP } from "./regexp";

/**
 * @summary 将大/小驼峰转换为短横线连接
 * @example - "oneTwoThree" -> "one-two-three"
 *          - "OneTwoThree" -> "one-two-three"
 */
export const camelToHyphenate = (str: string): string => {
  return str.replaceAll(/\B([A-Z])/g, "-$1").toLowerCase();
};

/**
 * @summary 将短横线连接转换为小驼峰
 * @example - "one-two-three" -> "oneTwoThree"
 */
export const hyphenateToLowerCamel = (str: string): string => {
  return str.replaceAll(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
};

/**
 * @summary 将短横线连接转换为大驼峰
 * @example - "one-two-three" -> "OneTwoThree"
 */
export const hyphenateToUpperCamel = (str: string): string => {
  str = hyphenateToLowerCamel(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * @summary 将小驼峰转换为大驼峰
 * @example - "oneTwoThree" -> "OneTwoThree"
 */
export const hyphenateLowerCamelToUpperCamel = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * @summary 提取作用域包子名称
 * @example - "@pkg/a" -> "a"
 */
export const getScopePkgName = (str: string): string => {
  return str.replace(SCOPED_PKG_REGEXP, "").replace("/", "");
};
