/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
    './src/javascript/**/*.js',
    '!./node_modules/**',
    '!./dist/**',
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales (copiados exactos de src/javascript/tailwindcss.js)
        primary:        '#01426A',
        secondary:      '#9A7611',
        highlight:      '#C49E4F',
        accent:         '#C49E4F', // alias de highlight — usado en ring-accent, text-accent, etc.
        dark:           '#1A1A1A',
        light:          '#F4F4F4',
        // Colores por esfera
        arteindustria:  '#CD545B',
        casaideas:      '#DC6B2F',
        innovamoda:     '#93328E',
        joveneslideres: '#211551',
        paseofama:      '#FFC72C',
        sinfonica:      '#93272C',
        tijuanaverde:   '#C4D600',
        tiazul:         '#01426A',
        tidorado:       '#9A7611',
      },
      fontFamily: {
        'quicksand-bold':     ['Quicksand-Bold', 'sans-serif'],
        'quicksand-semibold': ['Quicksand-SemiBold', 'sans-serif'],
        'quicksand-medium':   ['Quicksand-Medium', 'sans-serif'],
        'quicksand-regular':  ['Quicksand', 'sans-serif'],
        'quicksand-light':    ['Quicksand-Light', 'sans-serif'],
        'dm-sans-bold':       ['DM-Sans-Bold', 'sans-serif'],
        'dm-sans-medium':     ['DM-Sans-Medium', 'sans-serif'],
        'dm-sans-regular':    ['DM-Sans', 'sans-serif'],
        'anton':              ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
