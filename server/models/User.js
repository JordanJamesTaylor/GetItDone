const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, 'Username must be at least 3 characters long.']
    },
    email: {
        type: String,
        unique: true, 
        required: true,
        validate: (email) => validator.isEmail(email)
    },
    password: {
        type: String,
        minLength: [5, 'Username must be at least 5 characters long.'],
        maxLength: [256, 'Password cannot be more than 256 characters.'],
        required: true,
        validate: (password) => validator.isStrongPassword(password)
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});
// custom method
UserSchema.methods.getSignedJwtToken = function(){
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

module.exports = mongoose.model('User', UserSchema);