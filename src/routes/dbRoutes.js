var express = require('express');
var app= express();
var dbRouter = express.Router('');
var mongodb = require('mongodb').MongoClient;

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

dbRouter.route('/AddEventData')
    .get(function (req,res) {

        var url = "mongodb://localhost:27017/";
        mongodb.connect(url, function (err, db) {
            if (err) throw err;

            var dbo = db.db("mydb");
            var myobj = {name: "Company Inc", address: "Highway 37"};
            dbo.collection("events").insertMany(eventsData, function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
        });
    });
module.exports = dbRouter;