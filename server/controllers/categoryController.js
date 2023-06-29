const getCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Here are all categories.' });
};

const getCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Category #${req.params.categoryId}, ${req.body.title} created `});
};

const createCategory = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `New category ${req.body.title} created` });
};


const putCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Category ${req.body.title} updated` });
};

const deleteCategories = (req, res, next) => {
    res
    .status(204)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'All categories deleted' });
};

const deleteCategory = (req, res, next) => {
    res
    .status(204)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Category with ID: ${req.params.categoryId}` });
};

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    putCategory,
    deleteCategories,
    deleteCategory
};