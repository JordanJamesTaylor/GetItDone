const getUsers = (req, res) => {
    res
    .status(200) // response status
    .setHeader('content-type', 'application/json') // meta data about response
    .json({ message: 'SERVER HIT! Here are all the users.' }); // append payload and send as JSON
};

const createUser = (req, res) => {
    res
    .status(201) 
    .setHeader('content-type', 'application/json') 
    .json({ message: `SERVER HIT! User created with the user name of ${req.body.userName}` });
};

const putUser = (req, res) => {
    res
    .status(200) 
    .setHeader('content-type', 'application/json') 
    .json({ message: `SERVER HIT! User ${req.body.userName} has been updated` });
};

const deleteUsers = (req, res) => {
    res
    .status(204) 
    .setHeader('content-type', 'application/json') 
    .json({ message: 'SERVER HIT! All users deleted.' });
};

module.exports = {
    getUsers,
    createUser,
    putUser,
    deleteUsers
};