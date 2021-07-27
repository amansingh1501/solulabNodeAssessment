const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cab = new Schema({
    licencePlate: {
        type: String,
        required:true
    },
    DriverName : {
        type:String,
        required:true
    },
    location : {
        type: Object
    },
    active : {
       type: Boolean,
       required: true,
       default : true 
    },
    lastActive : {
        type:Date,
        required:true,
        default: new Date()
    }
});

module.exports = mongoose.model('cab', cab)