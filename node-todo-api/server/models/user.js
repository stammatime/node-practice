var mongoose = require('mongoose');

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

// var user1 = new User({
//     user: "Cody S",
//     email: "cody@email.com"
// })


// user1.save().then((doc)=>{
//     console.log('saved user: ', doc);
// },(err) => {
//     console.log('Unable to save todo', err);
// });

module.exports = {User};