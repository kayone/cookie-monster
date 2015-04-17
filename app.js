var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/static/worker.html");
});

app.post('/', function (req, res) {
  console.log(req.body);
  res.cookie(req.body.name, req.body.value, { maxAge: req.body.maxAge, httpOnly: false });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: 1 }));
});

module.exports = app;
