// data.ts
export const color = {
  white: "#ffffff",
  black: "#000000",
} as const;

// type.ts
import { color } from “./data”;
  type ColorSet = typeof color;
  declare global {
  const _color: ColorSet;
}

// index.ts
console.log(_color[“white”]);

// rollup.config.js
import inject from "@rollup/plugin-inject";
import typescript from "@rollup/plugin-typescript";
export default [
  {
    input: "index.ts",
    output: [
      {
        dir: "lib",
        format: "esm",
      },
    ],
    plugins: [typescript(), inject({ _color: ["./data", "color"] })],
  },
];