const getTasks = (req, res) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Here are all the tasks.' });
};

const getTask = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Task #${req.params.taskId}, ${req.body.title}` });
};

const createTask = (req, res) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `New task ${req.body.title}created` });
};

const putTask = (req, res) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Task ${req.body.title} updated` });
};

const deleteTasks = (req, res) => {
    res
    .status(204)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'All tasks deleted' });
};

const deleteTask = (req, res, next) => {
    res
    .status(204)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Task #${req.params.taskId}, ${req.body.title} deleted` });
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    putTask,
    deleteTasks,
    deleteTask
};