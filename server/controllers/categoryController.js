const getCategories = (req, res) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'SERVER HIT! Here are all categories.' })
};

const createCategory = (req, res) => {
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: `SERVER HIT! New category ${req.body.title} created` });
};


const putCategory = (req, res) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `SERVER HIT! Category ${req.body.title} updated` });
};

const deleteCategories = (req, res) => {
    res
    .status(204)
    .setHeader('content-type', 'application/json')
    .json({ message: 'SERVER HIT! All categories deleted' });
};

module.exports = {
    getCategories,
    createCategory,
    putCategory,
    deleteCategories
};