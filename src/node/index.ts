import chalk from "chalk";
import fse from "fs-extra";
import _execa, { sync as execaSync, command, commandSync } from "execa";
import deepmerge from "deepmerge";
import enquirer from "enquirer";

const execa = {
  execa: _execa,
  execaSync,
  command,
  commandSync,
};

export { chalk, fse, execa, deepmerge, enquirer };

export * from "../common";
export type * from "../types";

export * from "./check-node-version";
export * from "./fetch";
export * from "./git";
export * from "./global-deps";
export * from "./loading";
export * from "./logger";
export * from "./npm-pkg-metadata";
export * from "./npm";
export * from "./package-json";
export * from "./pm";
export * from "./prompt";
export * from "./env";
export * from "./path";
