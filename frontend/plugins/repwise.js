const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, addVariant, theme }) {
  const glowColors = {};
  for (const name of Object.keys(theme("colors"))) {
    glowColors[name] = `var(--color-${name})`;
  }

  matchUtilities(
    {
      glow: (color) => ({
        textShadow: `0 0 0.4em color-mix(in oklab, ${color} 60%, transparent), 0 0 1.2em color-mix(in oklab, ${color} 30%, transparent)`,
      }),
    },
    { values: glowColors }
  );

  addVariant("current", ['&[aria-current="page"]', '&[aria-current="true"]']);
});
