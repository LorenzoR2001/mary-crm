/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        myblack: "#1E1E1E",
        mywhite: "#F1F5F9",
        mygold: "#ebc67a",
        mygrey: "#707070",
        primary: "#e8bda1",
        secondary: "#5E4738",

        myblack2: "#161616",
      },
    },
  },
  plugins: [],
};
