import execa from "execa";

export enum PackageManagerBin {
  Npm = "npm",
  Yarn = "yarn",
  Pnpm = "pnpm",
}

export enum PackageManagerRegistry {
  Npm = "https://registry.npmjs.org",
  Yarn = "https://registry.yarnpkg.com",
  TaoBao = "https://registry.npmmirror.com",
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Pnpm = "https://registry.npmjs.org",
}

/**
 * @summary 获取 npm 注册表
 * @param {string} bin 包管理器命令名称，默认 npm
 * @description 内部实际采用 [bin] config get registry
 */
export async function getNpmRegistry(
  bin: PackageManagerBin = PackageManagerBin.Npm
) {
  let registry: string = PackageManagerRegistry.Npm;

  try {
    const res = await execa(bin, ["config", "get", "registry"]);
    registry = res.stdout;
  } catch {
    /* 忽略错误 */
  }

  return registry.replaceAll(/\/$/g, "");
}
