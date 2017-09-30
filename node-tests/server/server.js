const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.'
    });
})

// GET /users 
// Give users a name prop and age prop

var users = [{name:"Cody", age: 24},{name:"Zeppy", age: 31},{name:"Casey", age: 19}];

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

app.listen(3000);
module.exports.app = app;