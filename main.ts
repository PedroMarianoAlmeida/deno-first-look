import chalk from "chalk";
import { add } from "@scope/add";
import { subtract } from "@scope/subtract";

console.log("1 + 2 =", chalk.green(add(1, 2)));
console.log("2 - 4 =", chalk.red(subtract(2, 4)));
