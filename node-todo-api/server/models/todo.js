var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        default: null,
        type: Number
    }
});

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

module.exports = {Todo};