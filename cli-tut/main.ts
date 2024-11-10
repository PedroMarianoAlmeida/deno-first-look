import { parseArgs } from "@std/cli";

const args = parseArgs(Deno.args, {
  alias: {
    path: "p",
  },
  default: {
    path: "./",
  },
});

const entryPoint = args.path;
console.log("The entrypoint is: ", entryPoint);
