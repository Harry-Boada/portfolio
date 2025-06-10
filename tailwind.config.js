// tailwind.config.js
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',     // sombra clara
        'custom-sections': '0 6px 6px #ccc',     // sombre pallete
        'custom-dark': '0 3px 4px rgba(0, 0, 0, 0.3)',      // sombra fuerte
        'custom-blue': '0 4px 10px rgba(30, 64, 175, 0.5)',
        ' ': '1px 1px 4px #00857c'
      },

      borderRadius: {
        'sm-custom': '4px',  // Pequeño personalizado
        'md-custom': '8px', // Mediano personalizado
      },
    },
  },
  plugins: [],
}
