const getUsers = (req, res, next) => {
    res
    .status(200) // response status
    .setHeader('Content-Type', 'application/json') // meta data about response
    .json({ message: 'Here are all the users.' }); // append payload and send as JSON
};

const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me user with ID: ${req.params.userId}` });
}

const createUser = (req, res, next) => {
    res
    .status(201) 
    .setHeader('Content-Type', 'application/json') 
    .json({ message: `User created with the user name of ${req.body.userName}` });
};

const putUser = (req, res, next) => {
    res
    .status(200) 
    .setHeader('Content-Type', 'application/json') 
    .json({ message: `User with ID: ${req.params.userId} has been updated` });
};

const deleteUsers = (req, res, next) => {
    res
    .status(204) 
    .setHeader('Content-Type', 'application/json') 
    .json({ message: 'All users deleted.' });
};

const deleteUser = (req, res, next) => {
    res
    .status(204)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `User with ID: ${req.params.userId} has been deleted` });
};


module.exports = {
    getUsers,
    getUser,
    createUser,
    putUser,
    deleteUsers,
    deleteUser
};