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

    //deleteMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result)=>{
    //     console.log(result);
    // });
    
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });
    

    //db.close();
});