module.exports = {
    purge: [
      './public/index.html',
      './src/*.js',
      './src/**/*.js',
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