const bookingInfo = require("../models/bookingInfo")

class Booking {
    /**get bookings with dynamic conditions */
    getBookings(condition, skip, limit){
        return new Promise((resolve,reject) =>{
            bookingInfo.find(condition).skip(skip).limit(limit).populate('userId','name').populate('cabId','DriverName licencePlate').exec((err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
    /** Save data of bookings to the database */
    createBooking(data){
        return new Promise((resolve,reject)=>{
            new bookingInfo(data).save((err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
    /** Update data for booking. Currently used for completing the trip */
    updateBooking(data,id){
        return new Promise((resolve,reject)=>{
            bookingInfo.updateOne({_id:id},{$set : {data}}).exec((err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
}
module.exports = Booking;