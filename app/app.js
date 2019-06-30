var express = require('express');
var app = express();
var eventRouter = express.Router('');
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');

var eventsData = [
    {
        name: 'Event 1',
        description: 'The firts event',
        date:'2019.06.30',
        time:'2:00am',
        duration:'1 hour',
        location:{
            streetAdde:'101 Main St',
            city:'Los Angeles',
            state:'CSA',
            zip:'51000',
            lon:'0',
            lat:'0',
        }},
    {name: 'Event 2',
        description: 'The second event',
        date:'2019.07.20',
        time:'3:00am',
        duration:'3 hour',
        location:{
            streetAdde:'202 Main St',
            city:'Los Angeles2',
            state:'CA',
            zip:'52000',
            lon:'2',
            lat:'2',
        }},
    {name: 'Event 3',
        description: 'The 3ere event',
        date:'2019.07.20',
        time:'3:00am',
        duration:'3 hour',
        location:{
            streetAdde:'202 Main St',
            city:'Los Angeles2',
            state:'CA',
            zip:'52000',
            lon:'2',
            lat:'2',
        }},
    {name: 'Event 4 vet',
        description: 'The 4th event',
        date:'2019.07.20',
        time:'3:00am',
        duration:'3 hour',
        location:{
            streetAdde:'202 Main St',
            city:'Los Angeles2',
            state:'CA',
            zip:'52000',
            lon:'2',
            lat:'2',
        }
    }

]

eventRouter.route('/')
    .get(function (req,res) {
        res.render('events',{
            list:['Evento 1','Evento 2','Evento 3'],
            nav:[{Link:'Services',Text:'Services'},
                {Link:'Portfolio',Text:'Portfolio'},
                {Link:'About',Text:'About'},
                {Link:'Team',Text:'Team'},
                {Link:'Contact',Text:'Contact'},
                {Link: 'Events',Text:'Events'}
            ],
            varEvents:eventsData
        })
    });
eventRouter.route('/event')
    .get(function (req,res) {
        res.send("Hello single Events")


    });

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

