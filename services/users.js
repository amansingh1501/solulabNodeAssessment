const users = require("../models/users");
const bcrypt = require('bcryptjs')
class User {
    /**Get user details */
    getUser(condition){
        return new Promise((resolve, reject) => {
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
    /**Create user */
    createUser(data){
        return new Promise((resolve,reject)=>{
            new users(data).save((err,result)=>{
                if(err) reject(err);
                else resolve(result)
            })
        })
    }
    /** Generate hash from a string to be saved in password field */
    generateHash(password){
        return new Promise((resolve,reject)=>{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            resolve(hash)
        })
    }
    /** Compare the Database password hash with the password string provided by the user */
    compareHash(password, hash){
        return new Promise((resolve,reject)=>{
            const result = bcrypt.compareSync(password, hash);
            resolve(result)
        })
    }
}
module.exports = User;