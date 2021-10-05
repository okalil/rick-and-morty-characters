module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('assets/wallpaper.png')"
      },
      colors: {
        green: {
          brand: '#3abc00'
        }
      },
      fontFamily: {
        body: ['Poppins', 'Verdana', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
