const getTasks = (req, res) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'SERVER HIT! Here are all the tasks.' })
};

const createTask = (req, res) => {
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: `SERVER HIT! New task ${req.body.title}created` });
};

const putTask = (req, res) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `SERVER HIT! Task ${req.body.title} updated` });
};

const deleteTasks = (req, res) => {
    res
    .status(204)
    .setHeader('content-type', 'application/json')
    .json({ message: 'SERVER HIT! All tasks deleted' });
};

module.exports = {
    getTasks,
    createTask,
    putTask,
    deleteTasks
};