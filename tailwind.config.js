/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'primarycolor': '#6F3DFD',
      'textcolor': '#202020',
      'white': '#FFFFFF',
      'primarylight': '#F4F1FF',
      'primaryhover': '#5A27ED'
      
    },
    fontFamily: {
      sans: ['Archivo', 'sans-serif']
    },
    // fontSize: {
    //   sm: '1rem',
    //   base: '1.25rem',
    //   xl: '2.5rem',
    // }
  },
  plugins: [
  ],
}
