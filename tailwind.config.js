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
      },
      animation: {
        wave: 'wave calc(1.3s * 0.75) linear infinite'
      },
      keyframes: {
        wave: {
          '0%, 60%, 100%': { transform: 'initial' },
          '30%': { transform: 'translateY(-15px)' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
