import chalk from "chalk";
import { satisfies } from "semver";
import { exit } from "node:process";

export function checkNodeVersion(expect: string, pkgName: string) {
  if (!satisfies(process.version, expect)) {
    console.log(
      chalk.red(
        "你使用的 Node 版本是" +
          process.version +
          ", " +
          pkgName +
          " 要求的 Node 版本是 " +
          expect +
          ".\n请升级你的 Node 版本！"
      )
    );
    exit(1);
  }
}
