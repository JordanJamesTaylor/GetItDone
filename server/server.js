const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const user = require('./routes/user');
const task = require('./routes/task')
const category = require('./routes/category');

dotenv.config({ path: './config/config.env'}); // connect to config file

const app = express(); // invoke express so we can use its methods

app.use(bodyParser.json()); // parse application json
// end points
app.use('/user', user);
app.use('/task', task);
app.use('/category', category);

const PORT = process.env.PORT || 5001; // pull var PORT from config.env

const server = app.listen(PORT, () => { 
    console.log(`Server is listening on PORT: ${PORT}`);
});