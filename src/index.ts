#!/usr/bin/env node

import chalk from "chalk";
import { fromState } from "./api";

const toPct = (n: number): string => {
  return (n * 100).toFixed(2) + "%";
};

export const run = async () => {
  const data = await fromState("sp");

  const first = toPct(data["total-pct-vacinados-dose-1"]);
  const all = toPct(data["total-pct-vacinados-dose-2"]);

  console.log(chalk.yellow.bold("Dados de SP"));
  console.log(chalk.green.bold(first), "já tomaram a primeira dose.");
  console.log(chalk.green.bold(all), "já tomaram todas as doses.");
  console.log(chalk.gray("Fonte: G1"));
};

run();
