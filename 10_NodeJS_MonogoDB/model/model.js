const mongoose = require('mongoose');

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/univeristy',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },function(error){
        if(error){
            console.error('Unable to connect to MongoDB: ', error);
        } else{
            console.log('Connected to MongoDB');
        }
    }
);
/* Doesn't work after version 6.0???
mongoose.set('useCreateIndex', true);
*/

//create Schema for university table
let schema = mongoose.Schema;

//user Schema that contains username and passwords
let userSchema = new schema({
    username: String,
    email: String,
    password: String
},{
    collection: 'users'
});

//student Schema that contains students info
let studentSchema = new schema({
    sid: {
            type: String,
            validation:[/^1[0-9]{4}$/, 'must be 4 digits and starts with 1'],
            unique: true,
            index: true
        },
    firstName: String,
    lastName: String,
    gpa: Number

},{
    collection: "students"
});

//Link the Database with our objects
module.exports.User = mongoose.model('users', userSchema);
module.exports.Students = mongoose.model('students', studentSchema);

/*
    Database: University
        Table:
                users: 
                    columns:

                students,

*/