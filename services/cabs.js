const cabs = require("../models/cabs")


class Cab{
    getCabsNearMyLocation(location,skip=0, limit=10){
        return new Promise((resolve,reject)=>{
            cabs.find({
                location: {
                   $near: {
                     $geometry: location,
                     $maxDistance: 100,
                     $minDistance: 0
                   }
                 }
              }).exec((err,result) =>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
    createCab(data){
        return new Promise((resolve,reject)=>{
            new cabs(data).save((err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
    updateLocation(id,location){
        return new Promise((resolve, reject)=>{
            cabs.updateOne({_id:id}, {$set: {location : location}}).exec((err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
}

module.exports = Cab