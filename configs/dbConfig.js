module.exports = () => {
    const mongoose = require('mongoose');
    const dbHOST = process.env.DBHOST;
    const dbName = process.env.DBNAME;
    const dbPORT = process.env.DBPORT;


    mongoose.connect(`mongodb://${dbHOST}:${dbPORT}/${dbName}` , (err, conn)=>{
        if(err) {
            console.log(`Error connecting DB : ${err}`)
        }
        console.log(`DB connected successfully. DB URL : mongodb://${dbHOST}:${dbPORT}/${dbName} `)
    })
}