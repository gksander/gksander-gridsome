const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue,
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fill: theme => ({
      primary: theme("colors.primary"),
    }),
  },
  variants: {},
  plugins: [],
};
