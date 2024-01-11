/**
 * @summary 1 秒钟的毫秒数
 * @example 1 * 1000
 */
export const SECONDS_MILLISECONDS = 1 * 1000;

/**
 * @summary 1 分钟的毫秒数
 * @example 1 * 60 * 1000
 */
export const MINUTES_MILLISECONDS = 1 * 60 * SECONDS_MILLISECONDS;

/**
 * @summary 1 小时的毫秒数
 * @example 1 * 60 * 60 * 1000
 */
export const HOURS_MILLISECONDS = 1 * 60 * MINUTES_MILLISECONDS;

/**
 * @summary 1 天的毫秒数
 * @example 1 * 24 * 60 * 60 * 1000
 */
export const DAYS_MILLISECONDS = 1 * 24 * HOURS_MILLISECONDS;

/**
 * @summary 1 周的毫秒数
 * @example 1 * 7 * 24 * 60 * 60 * 1000
 */
export const WEEKS_MILLISECONDS = 1 * 7 * DAYS_MILLISECONDS;

/**
 * @summary 1 月的毫秒数，按照 31 天算
 * @example 1 * 31 * 24 * 60 * 60 * 1000
 */
export const MONTHS_MILLISECONDS = 1 * 31 * DAYS_MILLISECONDS;

/**
 * @summary 1 年的毫秒数，按照 365 天算
 * @example 1 * 365 * 24 * 60 * 60 * 1000
 */
export const YEARS_MILLISECONDS = 1 * 365 * DAYS_MILLISECONDS;
