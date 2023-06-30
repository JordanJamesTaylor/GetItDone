const Task = require('../models/Task');

const getTasks = async (req, res, next) => {
    try{
        const allTasks = await Task.find();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(allTasks);
    } catch(err) {
        next(err);
    };
};

const getTask = async (req, res, next) => {
    try{
        const task = await Task.findById(req.params.taskId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(task);
    } catch(err) {
        next(err);
    };
};

const createTask = async (req, res, next) => {
    try{
        const newTask = await Task.create(req.body);

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(newTask);
    } catch(err) {
        next(err);
    };
};

const putTask = async (req, res, next) => {
    try{
        const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedTask);
    } catch(err) {
        next(err);
    };
};

const deleteTasks = async (req, res, next) => {
    try{
        const deletedTasks = await Task.deleteMany();

        res
        .status(204)
        .setHeader('Content-Type', 'application/json')
        .json(deletedTasks);
    } catch(err) {
        next(err);
    };
};

const deleteTask = async (req, res, next) => {
    try{
        const deletedTasks = await Task.findByIdAndDelete(req.params.taskId, req.body, { new: true });
        
        res
        .status(204)
        .setHeader('Content-Type', 'application/json')
        .json(deletedTasks);
    } catch(err) {
        next(err);
    };
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    putTask,
    deleteTasks,
    deleteTask
};