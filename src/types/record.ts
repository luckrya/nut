export type IExtendRecord<
  T extends Record<string, unknown>,
  RK extends string | number | symbol = string,
  RV = unknown,
> = T & Record<RK, RV>;
