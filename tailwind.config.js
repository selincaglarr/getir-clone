module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open-Sans", "sans-serif"],
      },
      colors: {
        brandColor: "#5d3ebc",
      },
    },
    plugins: [],
  },
};
