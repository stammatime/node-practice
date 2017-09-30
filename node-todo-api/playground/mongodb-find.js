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

    // db.collection('Todos').find({_id: new ObjectID("59cf976c8da6134d4a59c1c6")}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log("Unable to fetch todos ", err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (error) => {
    //     console.log("Unable to fetch todos ", err)
    // });

    db.collection('Users').find({name: "Takemoto"}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log("Unable to fetch todos ", err)
    });
    db.close();
});