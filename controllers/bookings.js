const bookingService = require('../services/bookings');
const Booking = new bookingService();

exports.createBooking=(req,res) =>{
    if(req.body.cabId){
        const data = {
            userId: req.cookies.userId,
            cabId: req.body.cabId,
            startLocation : req.body.startLocation,
            endLocation : req.body.endLocation
        }
        Booking.createBooking(data).then((result) =>{
            if(result) res.json({status:'success', message:'Booking Successful'});
            else res.json({status:'error',message:'Error booking Cab!'})
        }).catch((err)=>{
            res.json({status:'error',message:err})
        })
    }else{
        res.json({status:'error', message:'Please select a cab to book.'})
    }
}
exports.getBookings = (req,res)=>{
    Booking.getBookings({
        userId : req.cookies.userId,
        skip: req.query.skip,
        limit: req.query.limit 
    }).then((result)=>{
        if(result) res.json({status:'success', message:result});
        else res.json({status:'error',message:'Error getting data!'})
    }).catch((err)=>{
        res.json({status:'error',message:err})
    })
}
exports.completeTrip = (req,res) =>{
    Booking.updateBooking({droppedAt : newDate()}, req.params.id ).then((result)=>{
        if(result) res.json({status:'success', message:'Trip Completed'});
        else res.json({status:'error',message:'Error completing Trip!'})
    }).catch((err)=>{
        res.json({status:'error',message:err})
    })
}