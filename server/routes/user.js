const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    putUser,
    deleteUsers,
    deleteUser
} = require('../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUsers);

router.route('/:userId')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser)

module.exports = router;