const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booking = new Schema({
    cabId : {
        type: Schema.Types.ObjectId,
        ref : 'cab'
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    startLocation : {
        type: Object,
        requried: true
    },
    endLocation :  {
        type: Object,
        requried: true
    },
    bookedAt : {
        type:Date,
        required:true,
        default: new Date()
    },
    droppedAt  :{
        type:Date,
        required:false
    }
});

module.exports = mongoose.model('booking', booking)