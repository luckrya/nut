import path from "node:path";
import fs from "fs-extra";
import deepmerge from "deepmerge";
import { readPackageSync, type NormalizedPackageJson } from "read-pkg";
import { SCOPED_PKG_REGEXP } from "../common";

export function existsPkgJson(context: string) {
  return fs.existsSync(path.resolve(context, "package.json"));
}

export type PkgJson<E> = NormalizedPackageJson & E;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPkgJson<E = Record<string, any>>(
  context: string
): PkgJson<E> | undefined {
  let pkg;

  if (fs.existsSync(path.join(context, "package.json"))) {
    pkg = readPackageSync({ cwd: context });
  }

  return pkg as never;
}

export function writePkgJson(
  pkg: Partial<NormalizedPackageJson>,
  context: string
) {
  if (existsPkgJson(context)) {
    const newPkg = deepmerge(getPkgJson(context) || {}, pkg);

    fs.writeJsonSync(path.resolve(context, "package.json"), newPkg, {
      spaces: 2,
    });
  }
}

export function isScopedPackage(name: string) {
  return SCOPED_PKG_REGEXP.test(name);
}
