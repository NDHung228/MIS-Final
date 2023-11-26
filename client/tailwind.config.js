/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-color": "#000",
      "secondary-color": "#fff",
      "gray-overlay": "rgba(16, 14, 14, 45%)",
      "gray-bg": "#f4f6f8",
      "yellow": "#ECBB26"
    },
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [require("daisyui")],
}