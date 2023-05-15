module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},

      fontFamily:{
        'sans': ['Fira Sans']
      }

    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};


