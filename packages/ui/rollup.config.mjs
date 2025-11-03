import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve as pathResolve } from "node:path";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8"),
);

export default [
  // JavaScript/TypeScript build
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: "@", replacement: pathResolve(__dirname, "src") },
        ],
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "./dist/esm/types",
        exclude: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.spec.tsx",
          "**/*.spec.ts",
          "**/*.css",
        ],
      }),
    ],
    external: ["react", "react-dom"],
  },
  // CSS build
  {
    input: "src/styles/globals.css",
    output: {
      file: "dist/styles.css",
    },
    plugins: [
      postcss({
        extract: true,
        modules: false,
        minimize: true,
        sourceMap: true,
        plugins: [
          tailwindcss,
          autoprefixer,
        ],
      }),
    ],
  },
  // Type definitions
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
