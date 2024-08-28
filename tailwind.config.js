/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {
      lines: {
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
    },

  },

  plugins: [
    function ({ addUtilities, theme, e }) {
      const lines = theme('lines');
      const lineClampUtilities = Object.keys(lines).reduce((acc, key) => {
        const value = lines[key];
        acc[`.${e(`line-clamp-${key}`)}`] = {
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: value,
        };
        return acc;
      }, {});

      addUtilities(lineClampUtilities, ['responsive']);
    },
  ],

}
