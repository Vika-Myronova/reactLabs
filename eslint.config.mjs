import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "prettier",
    ],
    plugins: ["prettier", "@typescript-eslint", "react-hooks"],
    parser: "@typescript-eslint/parser",
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
        },
      ],
    },
    root: true,
  }),
];

export default eslintConfig;
