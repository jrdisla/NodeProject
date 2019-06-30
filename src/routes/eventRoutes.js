var express = require('express');
var app= express();
var eventRouter = express.Router('');
app.use(express.static('public'));
app.use(express.static('bower_components'));
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
eventRouter.route('/:id')
    .get(function (req,res) {
        var id = req.params.id;
        var image_id = parseInt(id);
        res.render('event',{
            list:['Evento 1','Evento 2','Evento 3'],
            nav:[{Link:'Services',Text:'Services'},
                {Link:'Portfolio',Text:'Portfolio'},
                {Link:'About',Text:'About'},
                {Link:'Team',Text:'Team'},
                {Link:'Contact',Text:'Contact'},
                {Link: 'Events',Text:'Events'}
            ],
            varEvents:eventsData[id],
            id:image_id+1
        })


    });
module.exports = eventRouter;