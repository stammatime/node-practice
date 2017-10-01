var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         default: null,
//         type: Number
//     }
// });

// var newTodo = new Todo({
//     text:'Cook dinner'
// });


// var newTodo2 = new Todo({
//     text: "Learn Japanese           ",
// });


// newTodo2.save().then((doc)=>{
//     console.log('saved todo: ', doc);
// },(err) => {
//     console.log('Unable to save todo', err);
// });


var User = mongoose.model('Users', {
    user: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        minlength: 1
    }
});

var user1 = new User({
    user: "Cody S",
    email: "cody@email.com"
})


user1.save().then((doc)=>{
    console.log('saved user: ', doc);
},(err) => {
    console.log('Unable to save todo', err);
});