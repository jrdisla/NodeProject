var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/', function (req, res) {
  res.send('Hola Mundo!');
});

app.get('/hola', function (req, res) {
  res.send('Hola Mundo!');
  res.
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

