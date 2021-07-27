
const cabService = require('../services/cabs');
const Cab = new cabService();
exports.createCab  =(req,res)=>{
    if(req.body.licencePlate && req.body.DriverName && req.body.location){
        Cab.createCab(req.body).then((result)=>{
            if(result) res.status(200).json({status:'success',message:result});
            else res.status(500).json({status:'error', message: 'Error creating Cab!'})
        }).catch((err)=>{
            res.status(500).json({status:'error',message:err})
        })
    }else{
        res.status(500).json({status:'error',message:"Missing Parameters"})
    }
}
exports.getCabByLocation = (req,res) =>{
    Cab.getCabsNearMyLocation(req.body.location, req.query.skip, req.query.limit).then((result)=>{
        if(result) res.status(200).json({status:'success',message:result});
        else res.status(500).json({status:'error', message: 'Error getting Cabs.'})
    }).catch((err)=>{
        res.status(500).json({status:'error',message:err})
    })
}
exports.updateLocation=(req,res)=>{
    if(req.body.location && req.params.id){
        Cab.updateLocation(req.params.id, req.body.location).then((result)=>{
            if(result) res.status(200).json({status:'success',message:result});
            else res.status(500).json({status:'error', message: 'Error updating location!'})
        }).catch((err)=>{
            res.status(500).json({status:'error',message:err})
        })

    }else{
        res.status(500).json({status:'error',message:'Missing Parameters'})
    }
}