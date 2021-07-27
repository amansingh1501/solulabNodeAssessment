const users = require("../models/users");
const bcrypt = require('bcryptjs')
class User {
    getUser(condition){
        return new Promise = ((resolve, reject) => {
            users.findOne(condition).exec((err, result)=>{
                if(err){
                    reject(err)
                }else if(!result){
                    reject({error : 'User Not Found'});
                }else{
                    resolve(result)
                }
            })
        })
        
    }
    createUser(data){
        return new Promise((resolve,reject)=>{
            new users(data).save((err,result)=>{
                if(err) reject(err);
                else resolve(result)
            })
        })
    }
    generateHash(password){
        return new Promise((resolve,reject)=>{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            resolve(hash)
        })
    }
    compareHash(password, hash){
        return new Promise((resolve,reject)=>{
            const result = bcrypt.compareSync(password, hash);
            resolve(result)
        })
    }
}
module.exports = User;