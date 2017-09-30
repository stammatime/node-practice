// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,  ObjectID} = require('mongodb'); //identical to above

// var obj = new ObjectID();
// console.log(obj);

// // ES6 object destructuring
// var user = {name: 'cody', age: 24};
// var {name} = user;
// console.log(name); // prints cody

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // Inssert new doc into Users (name, age, location)
    
    // db.collection('Users').insertOne({
    //     name: "Cody",
    //     age: 24,
    //     location: "Richmond"
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

    // });

    db.close();
});