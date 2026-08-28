/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F1',
          soft: '#F3EEE3',
          deep: '#EDE5D4',
        },
        navy: {
          DEFAULT: '#0C1E36',
          light: '#16304F',
          deep: '#081527',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#E3CD9D',
          deep: '#9C7B3C',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(12, 30, 54, 0.25)',
        gold: '0 10px 40px -10px rgba(198, 161, 91, 0.45)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #081527 0%, #0C1E36 50%, #16304F 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E3CD9D 0%, #C6A15B 50%, #9C7B3C 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
