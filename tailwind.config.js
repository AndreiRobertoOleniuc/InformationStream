/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.tsx", "./src/components/*.tsx", "./src/components/blocks/*.tsx", "./src/pages/*.tsx"],
  theme: {
    extend: {
      maxHeight: {
        '128': '470px',
        '160': '550px'
      },
      padding: {
        '128': '30vw',
      }
    },
  },
  plugins: [],
}

