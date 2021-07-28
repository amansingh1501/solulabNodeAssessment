const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/** User Model */
const users = new Schema({
    /** Name of the user */
    name: {
        type: String,
        required:true
    },
    /** Email of the user */
    email : {
        type:String,
        required: true
    },
    /** Scope to save last login info, not being used right now */
    lastActive : {
        type:Date,
        required:true,
        default: new Date()
    },
    /** Encrypted password String */
    password:{
        type:String,
        required:true
    },
    /** Admin is for creating cabs. For now explicitly set this to true from Database */
    Admin : {
        type : Boolean,
        required:true,
        default : false
    }
});

module.exports = mongoose.model('user', users)