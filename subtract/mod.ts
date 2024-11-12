import { add } from "jsr:@palmeida/add";

export function subtract(a: number, b: number): number {
  return add(a, b * -1);
}

console.log(subtract(5, 2));
