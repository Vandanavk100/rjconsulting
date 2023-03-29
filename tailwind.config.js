/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Nav/**/*.{js,ts,jsx,tsx}",
    "./index/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,tsx,ts,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")]
}
