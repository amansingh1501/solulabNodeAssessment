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
        type: {
            type: String,
            required:true,
            default: 'Point',
          },
        coordinates: [Number]
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
cab.index( { location : "2dsphere" } )

module.exports = mongoose.model('cab', cab)