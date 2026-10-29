/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.html"],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light, .light *, :root:has(#theme-light:checked), :root:has(#theme-light:checked) *) }",
      "&:is(.dark, .dark *, :root:has(#theme-dark:checked), :root:has(#theme-dark:checked) *)",
    ],
  ],
  theme: {
    extend: {
      boxShadow: {
        energy: "0 6px 18px -8px var(--color-energy)",
      },
    },
  },
  plugins: [require("./frontend/plugins/repwise.js")],
};
