const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const user = require('./routes/user');
const task = require('./routes/task')
const category = require('./routes/category');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const fileupload = require('express-fileupload');

dotenv.config({ path: './config/config.env'}); // connect to config file

connectDB();

const app = express(); // invoke express to access its methods

app.use(bodyParser.json()); // parse application json
// middlewares
app.use(fileupload());
app.use(logger);
app.use(errorHandler);
// end points
app.use('/user', user);
app.use('/task', task);
app.use('/category', category);

const PORT = process.env.PORT || 5001; // pull var PORT from config.env

const server = app.listen(PORT, () => { 
    console.log(`Server is listening on PORT: ${PORT}`);
});

// catch any unhandled errors
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // kill server with exit code 1 (unhandledRejection)
    server.close(() => process.exit(1));
});