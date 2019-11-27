// vue.config.js
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // https://vapperjs.org/troubleshooting.html#vue-server-render-throws-an-error
  productionSourceMap: false,
  css: {
    extract: isProd,
    sourceMap: false
  }
}
