const dotenv = require('dotenv');//import dotenv module
const express = require('express');//import express module
const morgan = require('morgan');//import morgan module
const router = require('./routes/task.js');
const notFound = require('./Middlewares/not-found.js');
const errorHandlerMiddleware = require('./Middlewares/error handle.js');
const dbConnection = require('./config/database.js');
dbConnection();

dotenv.config(({path:'config.env'}));
const app = express();//create app from express function

//middlewares (middlewares before routes)
app.use(express.static('./public'));
app.use(express.json({extended:true}));
if(process.env.NODE_ENV === "development"){

    app.use(morgan("dev"));
    console.log(`mode : ${process.env.NODE_ENV}`);
}

//routes

//app.get('/api/v1/tasks')         -get all the tasks
//app.post('/api/v1/tasks')        -create a new task
//app.get('/api/v1/tasks/:id')     -get single task
//app.patch('/api/v1/tasks/:id')   -update task
//app.delete('/api/v1/tasks/:id')  -delete task




app.use('/api/v1/tasks',router);
app.use(notFound);
app.use(errorHandlerMiddleware);

//listening to the request
const PORT = process.env.PORT || 3000;
app.listen((PORT),()=>{
    
    console.log(`listening to port .....${PORT}`);

});