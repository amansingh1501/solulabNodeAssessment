const express = require('express');
const app = express();
require('dotenv').config();
/* IMPORT DB AND CONNECT TO DATABASE. USED MONGODB WITH MONGOOSE*/
const db = require('./configs/dbConfig.js');
const cookieParser = require('cookie-parser')

app.use(cookieParser())
const PORT = process.env.PORT || 3000;
const routers = require('./routes')
db();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use('/api/v1',routers)

app.listen(PORT, ()=>{
    console.log(`Server started on PORT : ${PORT}`)
})
