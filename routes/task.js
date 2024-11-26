const express = require('express');//import express module
const {getAllTasks , createTask , getTask ,updateTask , deleteTask} = require('../contorllers/task.js');
const router = express.Router();


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;