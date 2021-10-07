module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#054d75",
        secondary: "#a4ded2",
        tertiary: "#6fa4b5",
        grey: "#3b4748",
      },
      animation: {
        "slow-spin": "slow-spin infinite 20s linear",
      },
      keyframes: {
        "slow-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
    height: {
      "40vw": "40vw",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
