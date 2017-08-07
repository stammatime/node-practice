const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
//console.log(__dirname)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// This is for when site is under maintenance 
//
// app.use((req, res, next) =>{
//     res.render(`maintenance.hbs`, {
//         pageTitle: `Maintenance Page`,
//         maintenanceMessage: `This site is currently under maintenance`
//     });
// });

app.use((req, res, next) => {
    //next tells you when middleware function is done
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {if(err){console.log(`unable to append to server.log`)}});
    next();
});

//allows calling to files in public folder
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website!!!!'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});


app.get('/bad', (req, res) => {
    res.send({errorMessage:'This is not the page you\'re looking for'});
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});