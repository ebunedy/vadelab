module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontfamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    borderRadius: {
      "5xl": "2.5rem",
      lg: "0.5rem",
    },
    extend: {
      backgroundImage: {
        "cta-background": "url('../public/images/dots.svg')",
      },
      spacing: {
        135: "35rem",
        128: "28rem",
        120: "22.3rem",
      },
    },
  },
  plugins: [],
};
