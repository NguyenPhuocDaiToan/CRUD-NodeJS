const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    name: String, 
    gender: String,
    birthday: Date,
    email: {
        type: String,
        unique: true
    },
    phone: String,
    image: String,
    isDeleted: {
        type: Boolean, 
        default: false
    },
    class: {
        type: mongoose.Schema.ObjectId, ref: 'Class'
    },
});

module.exports = mongoose.model('Student', Student);