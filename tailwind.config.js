// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'aqua': '#00F5FF',    // Bright bluish-aqua
          'aqua-dim': '#00969B', // Dimmer aqua for shadows/gradients
          'deepBlue': '#020617' // Deep slate black (good substitute for pure black)
        },
      },
    },
    plugins: [],
  }