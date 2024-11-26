const mongoose = require('mongoose');//import mongoose module

//each line in schema must end with comma
const TaskSchema = new mongoose.Schema(
    {
      name : {
        type :String,
        required : [true , 'must provide a name'],
        trim : true,
        lowercase : true,
        maxlength : [20 , 'name cannot be more than 20 characters'],

      },
      completed:{
        type : Boolean,
        default : false,

    }
  }
);

module.exports = mongoose.model('Task',TaskSchema);//once you write this code the document created in database