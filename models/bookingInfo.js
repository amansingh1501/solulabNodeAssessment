const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/** Booking Model */
const booking = new Schema({
    /** Cab _id to be save to fetch it's details using populate  */
    cabId : {
        type: Schema.Types.ObjectId,
        ref : 'cab'
    },
    /** Users _id to be save to fetch it's details using populate  */
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    /** starting location of the trip */
    startLocation : {
        type: Object,
        requried: true
    },
    /** end location to be updated on trip end */
    endLocation :  {
        type: Object,
        requried: true
    },
    /** Booking time */
    bookedAt : {
        type:Date,
        required:true,
        default: new Date()
    },
    /** Time at which the trip was completed */
    droppedAt  :{
        type:Date,
        required:false
    }
});

module.exports = mongoose.model('booking', booking)