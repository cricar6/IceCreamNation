const express = require('express'), 
    engines = require('consolidate'),
    handlebars = require('handlebars'),
    MongoClient = require('mongodb').MongoClient;

var app = express(),
    db;


app.engine('hbs', engines.handlebars);
app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('icecreamnation');

    // Iniciar servidor
    app.listen(3000);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/tu_helado', (req, res) => {

    
    res.render('ice_cream');
    
});

app.get('/tu_helado/:direction', (req, res) => {
    var ice_creams = db.collection('ice_creams')
    .find(
        {
            direction : req.params.direction
        }
    ).toArray((err,result) => {
        res.render('ice_cream_selected', {
            cream: result[0]
        }); 
    }

    );


    
});
/*
app.get('/tu_helado/mint', (req, res) => {
    res.render('ice_cream_selected');
});
app.get('/tu_helado/bubblegum', (req, res) => {
    res.render('ice_cream_selected');
});
app.get('/tu_helado/vainilla', (req, res) => {
    res.render('ice_cream_selected');
});
app.get('/tu_helado/chocolate', (req, res) => {
    res.render('ice_cream_selected');
});
app.get('/tu_helado/pistachio', (req, res) => {
    res.render('ice_cream_selected');
});
app.get('/tu_helado/orange', (req, res) => {
    res.render('ice_cream_selected');
});

*/