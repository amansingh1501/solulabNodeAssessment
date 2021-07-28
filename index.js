const express = require('express');
const app = express();
require('dotenv').config();
/* IMPORT DB AND CONNECT TO DATABASE. USED MONGODB WITH MONGOOSE*/
const db = require('./configs/dbConfig.js');
/* cookie parser for parsing our cookies from request*/
const cookieParser = require('cookie-parser');
/* our app port from the Environment */
const PORT = process.env.PORT || 3000;
/* import our error handlers */
const {logErrors,clientErrorHandler,errorHandler} = require('./errorHandler')
/* use our error handlers as default middlewares */
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.use(cookieParser())
/*import all our routes */
const routers = require('./routes');

/*start db connection */
db();

/* Json and Url middlewares to parse our JSON and urls from requests */
app.use(express.json());
app.use(express.urlencoded({extended:true}));



/** Creating our REST API's */
app.use('/api/v1',routers);
/**sending other requests to 404 */
app.get('/*', function(req,res){
    res.status(404).json({status:'error', message:'Url not found'})
})
/**start the server */
app.listen(PORT, ()=>{
    console.log(`Server started on PORT : ${PORT}`)
})
