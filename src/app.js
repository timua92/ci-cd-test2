const express = require('express');
const path = require("path");          
const app = express();

app.use(express.static(__dirname)); 

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'ci-cd-starter' });
});

app.get('/', (req, res) => {

   res.sendFile(path.join(__dirname, "index.html"));

});

module.exports = app;
