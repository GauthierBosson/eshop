module.exports = {
  mode: process.env.NODE_ENV ? "jit" : undefined,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Zen Kaku Gothic Antique"']
      },
      container: {
        center: true,
        padding: '2rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("tailwindcss-fluid-type"),
  ],
};
