/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../landing-page.svg')",
        home: "url('../background.svg')",
        wallpaper: "url('../wallpaper-bg.svg')",
      },
      keyframes: {
        jelly: {
          "0%": { transform: "scale(1,1)" },
          "25%": {
            transform: "scale(1.25, 0.75)",
          },
          "50%": {
            transform: "scale(0.75, 1.25)",
          },
          "75%": {
            transform: "scale(1.15, 0.85)",
          },
          "100%": {
            transform: "scale(1, 1)",
          },
        },
        sliderRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        sliderBottom: {
          "0%": { top: "-400%" },
          "100%": { top: "100%" },
        },
        sliderUp: {
          "0%": { top: "100%" },
          "100%": { top: "-100%" },
        },
      },
      animation: {
        jelly: "jelly 0.5s ease-in-out",
        sliderRight: "sliderRight 0.5s ease-in-out",
        sliderLeft: "sliderLeft 0.5s ease-in-out",
        sliderBottom: "sliderBottom 1s ease-in-out",
        sliderUp: "sliderBottom 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
