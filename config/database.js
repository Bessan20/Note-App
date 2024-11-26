const mongoose = require('mongoose');//import mongoose module
const dotenv = require('dotenv');//import dotenv module
dotenv.config(({path:'config.env'}));

const dbConnection = ()=>{

    mongoose.connect(process.env.DB_URL)
    .then((conn)=>{

        console.log(`database connected to ......${conn.connection.host}`)
    })
    .catch((error)=>{

        console.error(`error occured : ${error}`);
    })
};

module.exports = dbConnection;
