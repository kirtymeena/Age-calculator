module.exports = {
  root: true,
  env: {
    node: true,
  },
  // "parser": '@typescript-eslint/parser',
  extends: webpack,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: module,
  },
  rules: {
    semi: ["error", "never"],
  },
  ignorePatterns: ["dist/*"],
}