import ora from "ora";
import chalk from "chalk";

const _ora = ora();

let lastMsg: {
  symbol: string;
  text: string;
} | null;

function start(msg: string, symbol: string = chalk.green("✔")) {
  if (lastMsg) {
    _ora.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  }

  _ora.text = " " + msg;
  lastMsg = {
    symbol: symbol + " ",
    text: msg,
  };

  _ora.start();
}

function stop(persist?: boolean) {
  if (lastMsg && persist !== false) {
    _ora.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  } else {
    _ora.stop();
  }
  lastMsg = null;
}

export const loading = {
  start,
  stop,
};
