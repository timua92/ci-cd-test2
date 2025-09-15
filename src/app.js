const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'ci-cd-starter' });
});

app.get('/', (req, res) => {
  res.send('Hello, CI/CD is far more ready than before');
});

module.exports = app;
