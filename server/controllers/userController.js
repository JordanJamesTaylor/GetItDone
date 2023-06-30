const User = require('../models/User');

const getUsers = async (req, res, next) => {
    try{
        const allUsers = await User.find();

        res
        .status(200) // response status
        .setHeader('Content-Type', 'application/json') // meta data about response
        .json(allUsers); // append payload and send as JSON
    } catch(err) {
        next(err);
    };
};

const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.userId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user);
    } catch(err) {
        next(err);
    };
};

const createUser = async (req, res, next) => {
    try{
        const newUser = await User.create(req.body);

        res
        .status(201) 
        .setHeader('Content-Type', 'application/json') 
        .json(newUser);
    } catch(err) {
        next(err);
    };
};

const putUser = async (req, res, next) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });

        res
        .status(200) 
        .setHeader('Content-Type', 'application/json') 
        .json(updatedUser);
    } catch(err) {
        next(err);
    };
};

const deleteUsers = async (req, res, next) => {

    const deletedUsers = await User.deleteMany();

    try{
        res
        .status(204) 
        .setHeader('Content-Type', 'application/json') 
        .json(deletedUsers);
    } catch(err){
        next(err);
    };
};

const deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.userId);

        res
        .status(204)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUser);
    } catch(err) { 
        next(err);
    };
};


module.exports = {
    getUsers,
    getUser,
    createUser,
    putUser,
    deleteUsers,
    deleteUser
};