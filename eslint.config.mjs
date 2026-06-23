import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "public/data/capstone/**",
      "public/data/cgai_dream_worlds/**",
    ],
  },
];

export default eslintConfig;
