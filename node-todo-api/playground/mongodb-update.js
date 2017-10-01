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

    db.collection('Users').findOneAndUpdate({
        name: "Casey"
    }, {
        $set: {name:"Caseye"},
        $inc: {age: 1}
    }, {
        returnOrignal: false // not sure why this isnt working
    }).then((result) =>{
        console.log(result);
    })

    //db.close();
});