module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "#282c34",
        "light-blue": "#61dafb",
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
