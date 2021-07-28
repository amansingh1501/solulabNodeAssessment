const userService = require('../services/users');
const User = new userService();

/** Login our user */
exports.loginUser = (req,res) =>{
    if(req.body.email && req.body.password){
        /** Get user service to find user */
        User.getUser({email: req.body.email}).then((result)=>{
            if(result){
                /** Compare password in db with the password provided */
                User.compareHash(req.body.password, result.password).then(passwordResult =>{
                    if(passwordResult){
                        res.cookie('userId', result._id).status(200).json({status:'success'})
                    }else{
                        res.status(401).json({status:'error',message:'Invalid Credentials'});
                    }
                }).catch((err)=>{
                    res.status(500).json({status:'error',message:err})
                })
            }else{
                res.status(401).json({status:'error',message:'Invalid Credentials'});
            }
        }).catch((err)=>{
            res.status(500).json({status:'error',message:err})
        })
    }else{
        res.status(401).json({status:'error',message:'Invalid Credentials'});
    }
}
/** Signup our end user */
exports.signupUser = async(req,res) =>{
    if(req.body.email && req.body.password && req.body.confirmPassword && req.body.name){
        if(req.body.password !== req.body.confirmPassword) res.status(403).json({status:'error',message:'Passwords do not match'})
        const {name,email,password} =req.body;
        const data = {
            name,email,password: await User.generateHash(password)
        }
        /** Create user service to save user to the Database */
        User.createUser(data).then((result)=>{
            if(result){
                res.status(200).json({status:'success',message:'User Registered Successfully!'})
            }else{
                res.status(403).json({status:'error',message:'Unknown Error!'})
            }
        }).catch((err)=>{
            res.status(500).json({status:'error',message:err})
        })
    }else{
        res.status(403).json({status:'error',message:'Missing parameters'})
    }
}