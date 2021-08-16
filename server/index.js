const axios = require('axios');
const express = require('express');
const app = express();
const path = __dirname + '/../client/dist';
app.use(express.static(path));
const port = 8080

// forward requests to API
const { createProxyMiddleware } = require('http-proxy-middleware');
// const API_KEY = require('./config/config.js');
const apiUrlReview = 'http://localhost:3000';

// add authentication to request header
const reviewProxyOptions = {
  target: apiUrlReview,
  changeOrigin: true,
  // onProxyReq: (proxyReq, req, res) => {
  //   proxyReq.setHeader('Authorization', API_KEY);
  // }
}

// establish middleware request forwarding
app.use('/api', createProxyMiddleware(reviewProxyOptions));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
