require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Servir contenido estatico
app.use( express.static('public') );

// Handlebars y registro de parciales
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jhons Albornoz',
        titulo: 'WEBSERVER | NODE'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jhons Albornoz',
        titulo: 'WEBSERVER | NODE'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jhons Albornoz',
        titulo: 'WEBSERVER | NODE'
    });
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});
 
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`)
});