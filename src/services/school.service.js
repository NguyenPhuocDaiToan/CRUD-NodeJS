const {School} = require('../models/index');

module.exports = {
    getAll: async () => {
        return await School.find({isDeleted: false}).lean();
    },

    create: async (school) => {
        school = new School({
            name: school.name,
            location: school.location,
            province: JSON.parse(school.province),
            district: JSON.parse(school.district),
            ward: JSON.parse(school.ward),
        });
        return await school.save();
    },

    findById: async(id) => {
        return await School.findOne({_id: id}).populate('class').lean();
    },

    update: async(id, school) => {
        school.province = JSON.parse(school.province);
        school.district = JSON.parse(school.district);
        school.ward = JSON.parse(school.ward);
        return await School.findOneAndUpdate({_id: id}, school);
    },

    delete: async(id) => {
        return await School.updateOne({_id: id}, {isDeleted: true});
    }
}