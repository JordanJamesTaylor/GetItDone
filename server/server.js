const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env'}); // connect to config file

const app = express(); // invoke express so we can use its methods

app.use(bodyParser.json()); // parse application json

const PORT = process.env.PORT || 5001; // pull var PORT from config.env

const server = app.listen(PORT, () => { 
    console.log(`Server is listening on PORT: ${PORT}`);
});