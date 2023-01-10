const mongoose = require('mongoose');
const Class = new mongoose.Schema({
    name: String, 
    school: {
        type: mongoose.Schema.ObjectId, ref: 'School'
    },
    isDeleted: {
        type: Boolean, 
        default: false
    },
});
module.exports = mongoose.model('Class', Class);