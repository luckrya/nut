import path from "node:path";
import fs from "fs-extra";
import { execSync } from "node:child_process";

let _hasYarn: boolean;
let _hasPnpm: boolean;

export function hasYarn() {
  if (_hasYarn != null) {
    return _hasYarn;
  }
  try {
    execSync("yarn --version", { stdio: "ignore" });
    return (_hasYarn = true);
  } catch {
    return (_hasYarn = false);
  }
}

export function hasProjectYarn(cwd: string) {
  const lockFile = path.join(cwd, "yarn.lock");
  const result = fs.existsSync(lockFile);

  if (result && !hasYarn()) {
    throw new Error(
      `项目似乎是需要 Yarn 的，但它没有被安装。您可以尝试全局安装 Yarn 或者删除 yarn.lock 文件来修复此异常！`
    );
  }

  return result;
}

function hasPnpm() {
  if (_hasPnpm != null) return _hasPnpm;

  try {
    execSync("pnpm --version", {
      stdio: ["pipe", "pipe", "ignore"],
    }).toString();
    return (_hasPnpm = true);
  } catch {
    return (_hasYarn = false);
  }
}

export function hasProjectPnpm(cwd: string) {
  const lockFile = path.join(cwd, "pnpm-lock.yaml");
  const result = fs.existsSync(lockFile);

  if (result && !hasPnpm()) {
    throw new Error(
      `项目似乎是需要 Pnpm ， 但它没有被安装。您可以尝试全局安装 Pnpm 或者删除 pnpm-lock.yaml 文件来修复此异常！`
    );
  }

  return result;
}
