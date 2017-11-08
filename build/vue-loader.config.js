module.exports = {
  extractCSS: process.env.NODE_ENV === 'prod',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
