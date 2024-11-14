/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0074D9', // Your primary color
        secondary: '#FF4136', // Your secondary color
        // Add more custom colors as needed
      },

    },
  },
  plugins: [],
}

