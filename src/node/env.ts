/**
 * TIP: 这个文件是用来判断当前的环境的，通过 process.env.NODE_ENV 来判断
 *      依赖 bundler 工具去实现，请不用使用在非 Node 环境中
 */

/**
 * @description 是否是线上环境
 * @tutorial process.env.NODE_ENV === "production"
 */
export const isProd = process.env.NODE_ENV === "production";

/**
 * @description 是否是开发环境
 * @tutorial process.env.NODE_ENV === "development"
 */
export const isDev = process.env.NODE_ENV === "development";

/**
 * @description 是否是 staging 环境
 * @tutorial process.env.NODE_ENV === "development"
 */
export const isStaging = process.env.NODE_ENV === "staging";

/**
 * @description 是否是测试环境
 * @tutorial process.env.NODE_ENV === "test"
 */
export const isTest = process.env.NODE_ENV === "test";
