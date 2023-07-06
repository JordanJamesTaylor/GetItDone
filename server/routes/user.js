const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    putUser,
    deleteUsers,
    deleteUser,
    postUserImage
} = require('../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUsers);

router.route('/:userId')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser)

router.route('/:userId/image')
    .post(postUserImage);

module.exports = router;