const express = require('express'),
    engines = require('consolidate'),
    handlebars = require('handlebars'),
    MongoClient = require('mongodb').MongoClient;

var app = express(),
    db;


app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

MongoClient.connect("mongodb+srv://cluster0-wiwgu.mongodb.net/icecreamnation?retryWrites=true",
{
    auth: {
        user: 'cricar',
        password: 'naitsirc_6569'
    }
}, function (err, client) {
    if (err) throw err;

    db = client.db('icecreamnation');

    // Iniciar servidor
    //app.listen(process.env.PORT || 3000);
    app.listen(3000);
});

/*
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('icecreamnation');

    // Iniciar servidor
    app.listen(3000);
});
*/
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/tu_helado', (req, res) => {


    res.render('ice_cream');

});

app.get('/tu_helado/:direction', (req, res) => {
    var ice_creams = db.collection('ice_creams')
        .find({
            direction: req.params.direction
        }).toArray((err, result) => {
            res.render('ice_cream_selected', {
                cream: result[0]
            });
        });
});


app.get("/tienda", (req, res) => {




    console.log("hola");
    var cono = db.collection('products').find();
    if (req.query.precio) {
        console.log(req.query.precio);
        cono.filter({
            precio: {
                $gte: parseFloat(req.query.precio[0]),
                $lte: parseFloat(req.query.precio[1])
            }
        });
    }
    if (req.query.sabor)
        cono.filter({
            sabor: req.query.sabor
        });

    cono.toArray((err, result) => {
        console.log(result);
        res.render('tienda', {
            cono: result
        })
    });



});


app.get("/tienda/cono/:nombre", (req, res) => {
    console.log("hola");
    db.collection('products').find({
        Nombre: req.params.nombre
    })
    .toArray((err, result) => {
        //console.log(result[0]);
        res.render('producto', {
            cono: result[0]
        });
    });
});