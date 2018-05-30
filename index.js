const express = require('express'), 
    engines = require('consolidate'),
    handlebars = require('handlebars');

var app = express();


app.engine('hbs', engines.handlebars);
app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/tu_helado', (req, res) => {
    res.render('ice_cream');
});


app.get('/tu_helado/blueberry', (req, res) => {
    res.render('ice_cream_selected');
});
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

app.listen(3000);
