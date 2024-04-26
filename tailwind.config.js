/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            500: "#546FFF"
          },
          secondary: {
            300: "#8E92BC",
            400: "#54577A"
          }
        },
      },
    },
  },
  plugins: [],
};
