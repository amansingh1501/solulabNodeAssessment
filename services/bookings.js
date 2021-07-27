const bookingInfo = require("../models/bookingInfo")

class Booking {
    getBookings(condition){
        return new Promise((resolve,reject) =>{
            bookingInfo.find(condition).exec((err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
    createBooking(data){
        return new Promise((resolve,reject)=>{
            new bookingInfo(data).save((err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
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