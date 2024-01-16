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
      },
      width: {
        'largeScrenWidth': "31.666667%",
        'mediumScreenWidth': "48.666667%",
        'imgBig': "500px",
      }
    },
  },
  plugins: [],
}

