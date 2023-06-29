const express = require('express');
const router = express.Router();
const {
    getTasks,
    getTask,
    createTask,
    putTask,
    deleteTasks,
    deleteTask
} = require('../controllers/taskController');

router.route('/')
    .get(getTasks)
    .post(createTask)
    .delete(deleteTasks);

router.route('/:taskId')
    .get(getTask)
    .put(putTask)
    .delete(deleteTask);

module.exports = router;
