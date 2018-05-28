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


app.listen(3000);
