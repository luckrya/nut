import chalk from "chalk";
import { cursorTo, clearScreenDown } from "node:readline";
import stripAnsi from "strip-ansi";

const pureStack = (msg: Error) => {
  const stack = (msg.stack || "").replace(msg.message, "");
  const pureStack = stack.split("\n").slice(1).join("\n");
  console.error();
  console.error(pureStack);
};

const chalkTag = (msg: string) => chalk.bgBlackBright.white.dim(` ${msg} `);

const format = (label: string, msg: string) => {
  return msg
    .split("\n")
    .map((line: string, i: number) => {
      return i === 0
        ? `${label} ${line}`
        : `${" ".repeat(stripAnsi(label).length + 1)}${line}`;
    })
    .join("\n");
};

function error(msg: string | Error, tag?: string, stack: boolean = true) {
  console.error(
    format(
      chalk.bgRed(" ERROR ") + (tag ? chalkTag(tag) : ""),
      chalk.red(msg instanceof Error ? msg.message : msg)
    )
  );

  if (msg instanceof Error && stack) {
    pureStack(msg);
  }
}

function warn(msg: string | Error, tag?: string, stack: boolean = false) {
  console.warn(
    format(
      chalk.bgYellow.black(" WARN ") + (tag ? chalkTag(tag) : ""),
      chalk.yellow(msg instanceof Error ? msg.message : msg)
    )
  );

  if (msg instanceof Error && stack) {
    pureStack(msg);
  }
}

function info(msg: string | Error, tag?: string) {
  console.log(
    format(
      chalk.bgBlue.black(" INFO ") + (tag ? chalkTag(tag) : ""),
      msg instanceof Error ? msg.message : msg
    )
  );
}

function clear(title: string) {
  if (process.stdout.isTTY) {
    const blank = "\n".repeat(process.stdout.rows);
    console.log(blank);
    cursorTo(process.stdout, 0, 0);
    clearScreenDown(process.stdout);

    if (title) console.log(title);
  }
}

export const logger = {
  info,
  warn,
  error,
  clear,
};
