const Category = require('../models/Category');

const getCategories = async (req, res, next) => {
    try{
        const allCategories = await Category.find();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(allCategories);
    } catch(err) {
        next(err);
    };
};

const getCategory = async (req, res, next) => {
    try{
        const category = await Category.findById(req.params.categoryId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(category);
    } catch(err) {
        next(err);
    };
};

const createCategory = async (req, res, next) => {
    try{
        const newCategory = await Category.create(req.body);

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(newCategory);
    } catch(err) {
        next(err);
    };
};


const putCategory = async (req, res, next) => {
    try{
        const updatedCategory = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true });

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedCategory);
    } catch(err) {
        next(err);
    };
};

const deleteCategories = async (req, res, next) => {
    try{
        const deletedCategories = await Category.deleteMany();

        res
        .status(204)
        .setHeader('Content-Type', 'application/json')
        .json(deleteCategories);
    } catch(err) {
        next(err);
    };
};

const deleteCategory = async (req, res, next) => {
    try{
        const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId, req.body, { new: true });

        res
        .status(204)
        .setHeader('Content-Type', 'application/json')
        .json(deletedCategory);
    } catch(err) {
        next(err);
    };
};

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    putCategory,
    deleteCategories,
    deleteCategory
};