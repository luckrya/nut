export const IE_REGEXP = /MSIE|Trident/;
export const EDGE_REGEXP = /Edg\/\d+/;
export const FIREFOX_REGEXP = /Firefox\/\d+/;
export const SAFARI_REGEXP = /Safari\/\d+/;
export const CHROME_REGEXP = /Chrome\/\d+/;

export const ANDROID_REGEXP = /Android/;
export const IOS_REGEXP = /iPhone|iPad|iPod|iOS/;

export const MAC_REGEXP = /MacIntel/;
export const LINUX_REGEXP = /Linux/;
export const WINDOWS_REGEXP = /Win/;

// 来自 yarn 源码
// All scoped package names are of the format `@scope%2fpkg` from the use of NpmRegistry.escapeName
// `(?:^|\/)` Match either the start of the string or a `/` but don't capture
// `[^\/?]+?` Match any character that is not '/' or '?' and capture, up until the first occurrence of:
// `(?=%2f|\/)` Match SCOPE_SEPARATOR, the escaped '/', or a raw `/` and don't capture
// The reason for matching a plain `/` is NPM registry being inconsistent about escaping `/` in
// scoped package names: when you're fetching a tarball, it is not escaped, when you want info
// about the package, it is escaped.
export const SCOPED_PKG_REGEXP = /(?:^|\/)(@[^/?]+?)(?=%2f|\/)/;

export const THOUSANDS_REGEXP = /(\d)(?=(?:\d{3})+$)/g;
