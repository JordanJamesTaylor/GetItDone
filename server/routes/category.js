const express = require('express');
const router = express.Router();
const {
    getCategories,
    getCategory,
    createCategory,
    putCategory,
    deleteCategories,
    deleteCategory
} = require('../controllers/categoryController');

router.route('/')
    .get(getCategories)
    .post(createCategory)
    .delete(deleteCategories);

router.route('/:categoryId')
    .get(getCategory)
    .put(putCategory)
    .delete(deleteCategory)
    
module.exports = router;

