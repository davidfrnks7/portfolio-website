import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";

const eslintConfig = defineConfig([
  ...nextVitals,
  eslintPluginPrettierRecommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  eslint.configs.recommended,
  // tseslint.configs.recommended,
  // tseslint.configs.stylistic,
  // reactHooks.configs.flat.recommended,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "types/**"
  ]),
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "off"
    },
    plugins: {
      jsxA11y: jsxA11y.configs.strict,
      reactHooks: reactHooks.configs.recommended,
      tseslint: tseslint.configs.recommended,
      tseslintStyle: tseslint.configs.stylisticTypeChecked
    }
  }
]);

export default eslintConfig;
