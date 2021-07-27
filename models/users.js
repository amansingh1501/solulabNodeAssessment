const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    name: {
        type: String,
        required:true
    },
    email : {
        type:String,
        required: true
    },
    lastActive : {
        type:Date,
        required:true,
        default: new Date()
    },
    Admin : {
        type : Boolean,
        required:true,
        default : false
    }
});

module.exports = mongoose.model('user', users)