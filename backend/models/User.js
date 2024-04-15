const mongoose = require('mongoose');
const {Schema}= mongoose;

const userSchema = new Schema({
    fname : {
        type : String,
        required : true,
    },
    lname : {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
    },
    age:{
        type : Number,
        required : true
    },
    phone:{
        type : Number,
        required : true,
        unique:true
    },
    selectgender:{
        type : String,
        required : true,
    },
    selecttype:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
    password:{
        type: Number,
        required : true,
    }

});

const User = mongoose.model('User',userSchema);
module.exports = User;
