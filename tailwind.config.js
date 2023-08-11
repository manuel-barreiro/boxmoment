/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Reigo",
        secondary: "Manrope",
      },

      colors: {
        pineGreen: "#044E43",
        xmasRed: "#F42F2F",
        federalBlue: "#090446",
        darkNight: "#191919"
      }
    },
    plugins: [require('flowbite/plugin')],
  }
}

