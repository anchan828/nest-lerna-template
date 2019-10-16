const prettierRc = require("./.prettierrc");
const path = require("path");
module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier/@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: path.resolve(__dirname, "tsconfig.eslint.json"),
  },
  plugins: ["@typescript-eslint", "sort-keys-fix"],
  rules: {
    "prettier/prettier": ["error", prettierRc],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-useless-constructor": "off",
    "sort-keys-fix/sort-keys-fix": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "lines-between-class-members": ["error", "always"],
  },
};
