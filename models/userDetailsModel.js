const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FullName: String,
    Email: String,
    PhoneNumber: String,
    Address: String
});

module.exports = mongoose.model('User', userSchema);
