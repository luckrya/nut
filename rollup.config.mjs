import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";

const output = [
  {
    format: "esm",
    dir: "dist",
    preserveModulesRoot: "src",
    preserveModules: true,
    sourcemap: false,
    entryFileNames: "[name].mjs",
  },
  {
    format: "cjs",
    exports: "named",
    dir: "dist",
    preserveModulesRoot: "src",
    preserveModules: true,
    sourcemap: false,
    entryFileNames: "[name].js",
  },
];

const plugins = [
  commonjs(),
  json(),
  // 将 ts 代码转换为有效的 JavaScript 代码
  esbuild({
    target: "esnext",
    minify: true,
    treeShaking: true,
  }),
];

export default defineConfig([
  {
    input: "src/node/index.ts",
    plugins: [
      resolve({
        // https://www.npmjs.com/package/@rollup/plugin-node-resolve#exportconditions
        exportConditions: ["node"],
      }),
      ...plugins,
    ],
    output,
  },
  {
    input: "src/client/index.ts",
    plugins: [
      resolve({
        // https://www.npmjs.com/package/@rollup/plugin-node-resolve#exportconditions
        exportConditions: ["default", "module", "require"],
      }),
      ...plugins,
    ],
    output: [
      ...output,
      {
        format: "umd",
        dir: "dist",
        name: "Nut",
        sourcemap: false,
        entryFileNames: "nut.umd.js", // .[hash]
      },
    ],
  },
]);
