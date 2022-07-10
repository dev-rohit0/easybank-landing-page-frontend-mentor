module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '1440px',
      'sm': '640px',
      'md': '800px',
      'lg': '1000px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'darkBlue': 'hsl(233, 26%, 24%)',
        'limeGreen': 'hsl(136, 65%, 51%)',
        'brightCyan': 'hsl(192, 70%, 51%)',
        'grayishBlue': 'hsl(233, 8%, 62%)',
        'lightGrayishBlue': 'hsl(220, 16%, 96%)',
        'veryLightGray': 'hsl(0, 0%, 98%)',
        'spclWhite': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        "public":['Public Sans', 'sans-serif']
      },
      fontSize: {
        "para":"18px"
      }
    },
  },
  plugins: [],
}