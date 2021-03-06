const config = {
  devServer: {
    // 前端开发服务器端口号
    port: 7001,
    // 远程服务代理设置
    proxy: {
      '^/api': {
        // 本地服务地址
        target: 'http://localhost:7010',
        changeOrigin: true, // 是否跨域
      },
    },
  },
  runtimeCompiler: true,
  // 生产环境不生成source map(此项关闭可以大幅缩小构架包体积并提高构建速度)
  productionSourceMap: false,
  publicPath: `/${process.env.VUE_APP_CLIENT_BASE_URL}`,
  lintOnSave: true,
  pages: {
    index: process.env.VUE_APP_ENTRY_PAGE_FILE || 'src/main.js',
  },
  configureWebpack: {
    externals: {
      wx: 'jWeixin',
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
    // optimization: {
    //   runtimeChunk: {
    //     name: 'manifest',
    //   },
    //   splitChunks: {
    //     chunks: 'initial',
    //     cacheGroups: {
    //       vue: {
    //         priority: 20,
    //         name: 'vue',
    //         test: /vue/,
    //         reuseExistingChunk: true,
    //       },
    //     },
    //   },
    // },
  },
};
module.exports = config;
