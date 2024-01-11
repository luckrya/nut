import { execSync } from "node:child_process";

let _hasGit: boolean;

export function hasGit() {
  if (_hasGit != null) {
    return _hasGit;
  }
  try {
    execSync("git --version", { stdio: "ignore" });
    return (_hasGit = true);
  } catch {
    return (_hasGit = false);
  }
}

export function hasProjectGit(cwd: string) {
  let result: boolean;

  try {
    execSync("git status", { stdio: "ignore", cwd });
    result = true;
  } catch {
    result = false;
  }

  return result;
}
