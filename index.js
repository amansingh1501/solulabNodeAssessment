const express = require('express');
const app = express();
require('dotenv').config();
/* IMPORT DB AND CONNECT TO DATABASE. USED MONGODB WITH MONGOOSE*/
const db = require('./configs/dbConfig.js')
const PORT = process.env.PORT || 3000;

db();
app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.get('/', function(req,res){
    res.json({name:'aman'})
})

app.listen(PORT, ()=>{
    console.log(`Server started on PORT : ${PORT}`)
})
