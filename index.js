const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const { engine } = require('express-handlebars');
const { routes } = require('./routes');

const app = express()

app.engine('handlebars', engine({
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))

app.use('/', routes)

const httpServer = http.createServer(app);
httpServer.listen(3000)

if (process.env.NODE_ENV != 'dev') {
  const certificate = fs.readFileSync('/etc/letsencrypt/live/lucasvillarroel.dev/fullchain.pem', 'utf8');
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/lucasvillarroel.dev/privkey.pem', 'utf8');

  const httpsServer = https.createServer({ key: privateKey, cert: certificate }, app);
  httpsServer.listen(3443)
}