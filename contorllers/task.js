'use strict';

const Task = require('../models/task.js');
const asyncWrapper = require('../Middlewares/async.js');
const { createCustomError } = require('../error/custom-error.js')

const getAllTasks = asyncWrapper(async(req,res) => {
    //res.status(200).send('get all tasks');
   
    const tasks = await Task.find({});
    res.status(200).json({status :'success',data : { tasks ,nbhits : tasks.length}});
    
     
});

const createTask = asyncWrapper(async(req,res) => {
    //res.json(req.body);
   // try {
    const task = await Task.create(req.body);
    res.status(201).json({task});
    /*}
    catch(error)
     {
        res.status(500).json({msg : error});
    }*/

});

const getTask = asyncWrapper(async(req,res,next) => {
    //res.json({id : req.params.id});
   
    
    const {id : taskID}= req.params;
    const task = await Task.findOne({_id:taskID});
    
    if(!task){
        //return res.status(404).json({msg : `No task with id : ${taskID}`});
        return next(createCustomError(`No task with id : ${taskID}`, 404));
    }

    res.status(200).json({task});
    
});

const updateTask = asyncWrapper(async(req,res,next) => {
    //res.send('update task');
    
        const {id : taskID}= req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,
            {new : true,runValidators : true}
        );
        
        if(!task){
            //return res.status(404).json({msg : `No task with id : ${taskID}`});
            return next(createCustomError(`No task with id : ${taskID}`, 404));
        }
        res.status(200).json({task});
        

});

const deleteTask = asyncWrapper(async(req,res,next) => {
    //res.send('delete task');
    
        const {id : taskID}= req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        
        if(!task){
            //return res.status(404).json({msg : `No task with id : ${taskID}`});
            return next(createCustomError(`No task with id : ${taskID}`, 404));
        }
        res.status(200).send("one element is deleted");
       
});

module.exports = {
    
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

};