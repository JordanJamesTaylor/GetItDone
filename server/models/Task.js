const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskScheam = new Schema({
    title: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskScheam);