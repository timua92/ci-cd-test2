const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'ci-cd-starter' });
});

app.get('/', (req, res) => {

   res.sendFile(path.join(__dirname, "index.html"));

});

module.exports = app;
