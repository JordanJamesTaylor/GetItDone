const User = require('../models/User');
const path = require('path');

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

        sendTokenResponse(newUser, 201, res);
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

const postUserImage = async (req, res, next) => {
    try {
        const err = { msg: 'Error uploading image.' };
        if(!req.files) next(err);

        const file = req.files.file;

        if(!file.mimetype.startsWith('image')) next(err);
        if(file.size > process.env.MAX_FILE_SIZE) next(err);

        file.name = `photo_${req.params.userId}${path.parse(file.name).ext}`;
        const filePath = process.env.FILE_UPLOAD_PATH + file.name;

        file.mv(filePath, async (err) => {

            await User.findByIdAndUpdate(req.params.userId, { image: file.name });

            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ msg: 'Image uploaded' });
        });
    } catch (err) {
        next(err);
    };
};

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    
    res
    .status(statusCode)
    .cookie('token', token, options)
    .json(token);
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    putUser,
    deleteUsers,
    deleteUser,
    postUserImage
};