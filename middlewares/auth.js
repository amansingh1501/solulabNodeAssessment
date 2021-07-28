exports.checkIsLoggedIn =(req,res,next) =>{
    if(req.cookies.userId){
        users.findOne({_id: req.cookies.userId}).exec((err,result)=>{
        if(err)  res.status(500).json({status:'error', message:'Internal Server Error'}) ;
        else if(!result) res.status(401).json({status:'error', message:'Unauthorised'});
        else next();
        })
    }else{
        res.status(401).json({status:'error', message:'Unauthorised'});
    }
}

exports.checkIsAdmin = (req,res) =>{
    if(req.cookies.userId){
        users.findOne({_id: req.cookies.userId}).exec((err,result)=>{
        if(err)  res.status(500).json({status:'error', message:'Internal Server Error'}) ;
        else if(!result) res.status(401).json({status:'error', message:'Unauthorised'});
        else {
            if(result.Admin){
                next();
            }else{
                res.status(403).json({status:'error', message:'You are not allowed to perform this action'});
            }
        }
        })
    }else{
        res.status(401).json({status:'error', message:'Unauthorised'});
    }
}