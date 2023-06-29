const express = require('express');
const router = express.Router();
const {
    getTasks,
    createTask,
    putTask,
    deleteTasks
} = require('../controllers/taskController');

router.route('/')
    .get(getTasks)
    .post(createTask)
    .put(putTask)
    .delete(deleteTasks);

module.exports = router;
