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
    sourcemap: true,
    entryFileNames: "[name].mjs",
  },
  {
    format: "cjs",
    exports: "named",
    dir: "dist",
    preserveModulesRoot: "src",
    preserveModules: true,
    sourcemap: true,
    entryFileNames: "[name].js",
  },
];

export default defineConfig([
  {
    input: "src/node/index.ts",
    external: [
      "chalk",
      "semver",
      "node-fetch",
      "fs-extra",
      "execa",
      "ora",
      "strip-ansi",
      "lru-cache",
      "deepmerge",
      "read-pkg",
      "enquirer",
    ],
    plugins: [
      resolve({ exportConditions: ["node"] }),
      commonjs(),
      json(),
      esbuild({
        target: "esnext",
        minify: false,
        treeShaking: true,
      }),
    ],
    output,
  },
  {
    input: "src/client/index.ts",
    plugins: [
      resolve(),
      commonjs(),
      json(),
      esbuild({
        target: "esnext",
        minify: false,
        treeShaking: true,
      }),
    ],
    output,
  },
  {
    input: "src/client/index.ts",
    plugins: [
      resolve(),
      commonjs(),
      json(),
      esbuild({
        target: "esnext",
        minify: true,
        treeShaking: true,
      }),
    ],
    output: [
      {
        format: "umd",
        dir: "dist",
        name: "Nut",
        sourcemap: false,
        // .[hash]
        entryFileNames: "nut.umd.js",
      },
    ],
  },
]);
