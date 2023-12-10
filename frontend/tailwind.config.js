const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "340px",
      },
      minHeight: {
        main: "calc(100vh - 6rem)",
      },
      animation: {
        check: "check 800ms ease",
      },
      keyframes: {
        check: {
          "0%": {
            height: 0,
            width: 0,
            opacity: 1,
          },
          "20%": {
            height: 0,
            width: "0.75rem",
            opacity: 1,
          },
          "40%": {
            height: "1.5rem",
            width: "0.75rem",
            opacity: 1,
          },
          "100%": {
            height: "1.5rem",
            width: "0.75rem",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
});
