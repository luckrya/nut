// 类型判断
export enum DataTypeString {
  Array = "[object Array]",
  Object = "[object Object]",
  Function = "[object Function]",
  Number = "[object Number]",
  String = "[object String]",
  Boolean = "[object Boolean]",
  Undefined = "[object Undefined]",
  Null = "[object Null]",
  Error = "[object Error]",
}

////// 空类型 //////
export const isUndefined = (value: unknown): value is undefined => {
  return Object.prototype.toString.call(value) === DataTypeString.Undefined;
};
export const isNull = (value: unknown): value is null => {
  return Object.prototype.toString.call(value) === DataTypeString.Null;
};

export const isNaN = Number.isNaN;

////// 基础类型 //////
export const isNumber = (value: unknown): value is number => {
  return Object.prototype.toString.call(value) === DataTypeString.Number;
};

export const isString = (value: unknown): value is string => {
  return Object.prototype.toString.call(value) === DataTypeString.String;
};

export const isBoolean = (value: unknown): value is boolean => {
  return Object.prototype.toString.call(value) === DataTypeString.Boolean;
};

export const isTrue = (value: unknown): value is true => {
  return isBoolean(value) && value === true;
};

export const isFalse = (value: unknown): value is false => {
  return isBoolean(value) && value === false;
};

////// 引用类型 //////
export const isArray = Array.isArray;

export const isError = (value: unknown): value is Error => {
  return Object.prototype.toString.call(value) === DataTypeString.Error;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function => {
  return Object.prototype.toString.call(value) === DataTypeString.Function;
};

export const isDate = (value: unknown): value is Date => value instanceof Date;

export const isObjectNonNull = (value: unknown): value is object => {
  return !isNull(value) && typeof value === "object";
};

export const isPureObject = <R extends Record<string, unknown>>(
  value: unknown
): value is R => {
  return Object.prototype.toString.call(value) === DataTypeString.Object;
};
