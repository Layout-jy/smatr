const {createProxyMiddleware}  = require('http-proxy-middleware')
module.exports = function(app){
  app.use(
    '/smart',
    createProxyMiddleware({
      target:'https://shopapi.smartisan.com/mobile',
      changeOrigin: true,
      pathRewrite:{
          "^/smart":"/"
      } 
    })
  )
}