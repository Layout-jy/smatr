const { override,addDecoratorsLegacy, fixBabelImports  } = require('customize-cra')
module.exports = override(
  //UI组件按需引入
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //装饰器语法
  addDecoratorsLegacy()
)