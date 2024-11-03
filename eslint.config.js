import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    commaDangle: "only-multiline",
    braceStyle: "1tbs",
  }),
  {
    ignores: [
      "node_modules/*",
      "dist/*",
      "logs/*",
      ".output/*",
      ".data/*",
      ".nuxt/*",
      ".nitro/*",
      ".cache/*",
    ],
  },
  {
    rules: {
      "no-undef": "off",
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "warn",
    }
  }
];
