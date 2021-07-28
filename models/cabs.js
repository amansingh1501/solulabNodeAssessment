const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/** Cab Model */
const cab = new Schema({
    /** Registration number of the cab */
    licencePlate: {
        type: String,
        required:true
    },
    /** Driver's Name to be displayed while booking */
    DriverName : {
        type:String,
        required:true
    },
    /** Current Location of the cab */
    location : {
        type: {
            type: String,
            required:true,
            default: 'Point',
          },
        coordinates: [Number]
    },
    /** Status of the cab, is it active or not */
    active : {
       type: Boolean,
       required: true,
       default : true 
    },
    /** In scope to get the last active time of the cab */
    lastActive : {
        type:Date,
        required:true,
        default: new Date()
    }
});
/** Indexed location as 2d sphere to perform geo near functions */
cab.index( { location : "2dsphere" } )

module.exports = mongoose.model('cab', cab)