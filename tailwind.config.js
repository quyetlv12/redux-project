module.exports = {
    purge: [
      './public/index.html',
      './src/*.js',
      './src/*.jsx',
      './src/**/*.js',
      './src/**/*.jsx'
    ],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
    // prefix : 'tw-'
  }