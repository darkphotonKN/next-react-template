const express = require('express');
const next = require('next');
const path = require('path');
const devProxy = require('./proxy');
const axios = require('axios');

const instance = axios.create({
  // baseURL: 'http://localhost:3001/api',
  // baseURL: 'https://jsonplaceholder.typicode.com/users',
  // baseURL: 'http://139.180.203.15:80/osnnp/common/api/content/HomeBanner',
  headers: {
    Authorization:
      'bearer AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAaLKyqsY9xEyD7EO1AylzHAAAAAACAAAAAAAQZgAAAAEAACAAAADkgnYrmW5XcyI9ZN5PJuJxAYYnWQMuUN6RavQ81lPcuQAAAAAOgAAAAAIAACAAAADJag1H7uhxBGrgWbuG0O25HjLdFkaZ2Bl99034BSgiyoAAAADhcgxauxMGBsRQ0zkAyzYpbGJzjSMGixRsyFp8lhFv71ETt4OlZHR0P9jNfHsfCNDts2Bg2q1X2mrwnl3IK-UBxlTY6zZEj_QUDPDZpLBVvfoSwTWn6neusQgeZccH5qma5DDtSkHOp6nQIv_jlioPxHD4NL6hyQAS0w7MzSQk3UAAAACLAUkFPLuBLiMDA37A6RnNxo8HYO-KaqWlEqC3eqlhyZ34lvau8nspNsVe-txQ51QtkdBoC9EbtkpabdYCXBTI'
  }
});

const PORT = process.env.PORT || 3000; // prioritize env in production

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  app.setAssetPrefix(process.env.STATIC_PATH);

  server.use(express.static(path.join(__dirname, '../static')));

  server.get('/test-realm', async (req, res, next) => {
    let data = [];

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      data = await response.data;
    } catch (err) {
      console.log(err);
    }
    res.json({
      mainData: data,
      date: '02/21/19'
    });
    next();
  });

  // server.get('/', (req, res, next) => {
  //   console.log('Testing ada.');
  //   next();
  // });

  if (process.env.PROXY_MODE === 'local' || true) {
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }

  server.get('*', (req, res) => {
    // let nextjs handle the rest
    return handler(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
