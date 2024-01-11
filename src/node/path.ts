export const isVueFile = (filePath: string) => filePath.endsWith(".vue");

export const isHtmlFile = (filePath: string) => filePath.endsWith(".html");

export const isJsFile = (filePath: string) =>
  filePath.endsWith(".js") ||
  filePath.endsWith(".mjs") ||
  filePath.endsWith(".cjs") ||
  filePath.endsWith(".jsx");

export const isTsFile = (filePath: string) =>
  filePath.endsWith(".ts") || filePath.endsWith(".tsx");
