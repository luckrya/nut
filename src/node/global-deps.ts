import fs from "fs-extra";
import path from "node:path";
import childProcess from "node:child_process";
import { hasProjectPnpm, hasProjectYarn } from "./npm";
import { isScopedPackage, getPkgJson } from "./package-json";

enum GlobalDepPathCmd {
  NPM = "npm root -g",
  YARN = "yarn global dir",
  PNPM = "pnpm root -g",
}

function globalDepPath(cmd: GlobalDepPathCmd) {
  let _path = "";
  try {
    _path = childProcess
      .execSync(cmd, {
        stdio: ["pipe", "pipe", "ignore"],
      })
      .toString();
  } catch {
    /* 无需捕获错误异常 */
  }

  return _path;
}

/**
 * @summary 获取全局包依赖路径
 * @description - 根据传入的 Context 下使用的包管理器搜寻对应的全局依赖包存放路径
 *       - 若 Context 下使用的是 Pnpm 则返回 Pnpm 对应的全局依赖包存放路径
 *       - 默认返回 npm 的全局依赖包存放路径
 */
export function getGlobalDepPath(context: string) {
  let depPath: string;

  if (hasProjectPnpm(context)) {
    depPath = globalDepPath(GlobalDepPathCmd.PNPM);
  } else if (hasProjectYarn(context)) {
    depPath = globalDepPath(GlobalDepPathCmd.YARN);
  } else {
    depPath = globalDepPath(GlobalDepPathCmd.NPM);
    depPath = `${depPath}/node_modules`;
  }

  return depPath.replaceAll("\n", "");
}

export interface NpmGlobalDepInfo {
  name: string;
  location: string;
}

function constructGlobalDeps(dirs: string[], context: string) {
  const result: NpmGlobalDepInfo[] = [];

  for (const dir of dirs) {
    const location = path.join(context, dir);

    try {
      if (!fs.statSync(location).isDirectory()) continue;

      if (isScopedPackage(dir)) {
        result.push(...constructGlobalDeps(fs.readdirSync(location), location));
      } else {
        const pkg = getPkgJson(location);
        result.push({
          name: pkg?.name || dir,
          location,
        });
      }
    } catch {
      /* 忽略这里的错误 */
    }
  }

  return result;
}

/**
 * @description 获取用户本机安装的全局依赖包列表
 * @param {string} context
 * 用于嗅探其 context 目录下的项目使用的包管理器是 pnpm/yarn/npm 哪一种？
 * 在选择其中使用的包管理器存放全局依赖包路径，并返回其下对应的依赖包列表
 * @example
 *   - NPM
 *     - npm root -g
 *     - '/usr/local/lib/node_modules'
 *     - '/Users/[user]/.nvm/versions/node/vx.x.x/lib/node_modules' // 安装 nvm 的情况
 *
 *   - YARN
 *     - yarn global dir
 *     - '/Users/[user]/.config/yarn/global/node_modules'
 *
 *   - Pnpm
 *     - pnpm root -g
 *     - '/Users/[user]/Library/pnpm/global/5/node_modules'
 */
export function getGlobalDeps(context: string) {
  const depPath = getGlobalDepPath(context);

  if (fs.existsSync(depPath)) {
    const deps = constructGlobalDeps(fs.readdirSync(depPath), depPath);
    return {
      deps,
      location: depPath,
    };
  }
}
