import {
  ANDROID_REGEXP,
  CHROME_REGEXP,
  EDGE_REGEXP,
  FIREFOX_REGEXP,
  IE_REGEXP,
  IOS_REGEXP,
  LINUX_REGEXP,
  MAC_REGEXP,
  SAFARI_REGEXP,
  WINDOWS_REGEXP,
} from "../common";

/**
 * @description The User-Agent request header is a characteristic string that lets servers and network peers
 *              identify the application, operating system, vendor, and/or version of the requesting user agent.
 * @tutorial 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent'
 */

const test = (
  reg: RegExp,
  value?: string,
  defaultValue = window?.navigator?.userAgent
) => reg.test(value || defaultValue);

export const isIE = (value?: string) => test(IE_REGEXP, value);

export const isEdge = (value?: string) => test(EDGE_REGEXP, value);

export const isFirefox = (value?: string) => test(FIREFOX_REGEXP, value);

export const isChrome = (value?: string) =>
  test(CHROME_REGEXP, value) && !isEdge(value);

export const isSafari = (value?: string) =>
  test(SAFARI_REGEXP, value) && !isEdge(value) && !isChrome(value);

export const isAndroid = (value?: string) => test(ANDROID_REGEXP, value);

export const isIOS = (value?: string) => test(IOS_REGEXP, value);

export const isLinux = (value?: string) =>
  test(LINUX_REGEXP, value, window.navigator.platform);

export const isMac = (value?: string) =>
  test(MAC_REGEXP, value, window.navigator.platform);

export const isWindows = (value?: string) =>
  test(WINDOWS_REGEXP, value, window?.navigator?.platform);
