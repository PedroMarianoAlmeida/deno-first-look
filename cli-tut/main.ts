import { parseArgs } from "@std/cli";

const args = parseArgs(Deno.args, {
  alias: {
    path: "p",
  },
});

const { path } = args;
console.log(path);

if (!path) {
  const buf = new Uint8Array(1024);
  console.log("Add path");

  const n = await Deno.stdin.read(buf) || undefined;
  const input = new TextDecoder().decode(buf.subarray(0, n)).trim();

  console.log(`You entered: ${input}`);
}


// using file = await Deno.open(path, { read: true });
// const fileInfo = await file.stat();

// console.log("-------------BEGIN---------------")
// console.log({fileInfo});
// if (fileInfo.isFile) {
//   const buf = new Uint8Array(100);
//   const text = new TextDecoder().decode(buf);
//   console.log("File text: ", text);
// }

// const entryPoint = args.path;
// console.log("The entrypoint is: ", entryPoint);
// console.log("------------END----------------")
