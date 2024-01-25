/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#7e7f7e', // Replace with your custom color code
      },     
    },
  },
  plugins: [],
}

