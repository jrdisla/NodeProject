var express = require('express');
var app = express();
var eventRouter = require('./../src/routes/eventRoutes')
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/Events',eventRouter);

app.get('/', function (req, res) {
 res.render('index',{
     list:['1er val','2do val','3er val'],
     nav:[{Link:'Services',Text:'Services'},
         {Link:'Portfolio',Text:'Portfolio'},
         {Link:'About',Text:'About'},
         {Link:'Team',Text:'Team'},
         {Link:'Contact',Text:'Contact'},
         {Link: 'Events',Text:'Events'}
         ]
 });
});

app.get('/hola', function (req, res) {
  res.send('Hola Mundo!');



});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

