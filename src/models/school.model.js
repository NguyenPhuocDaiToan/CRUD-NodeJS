const mongoose = require('mongoose');
const School = new mongoose.Schema({
    name: String,
    province: Object,
    district: Object,
    ward: Object,
    location: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('School', School);