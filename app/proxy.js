const devProxy = {
  '/api': {
    target: 'http://125.227.250.187:16508/common/api/',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true
  }
};

module.exports = devProxy;
