export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gotham: {
          bg:      "#0B0B1E",
          surface: "#14142E",
          card:    "#1C1C3A",
          card2:   "#22223F",
          purple:  "#7C3AED",
          violet:  "#A78BFA",
          cyan:    "#22D3EE",
          pink:    "#F472B6",
          text:    "#E2E8F0",
          muted:   "#8892A4",
        }
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
}