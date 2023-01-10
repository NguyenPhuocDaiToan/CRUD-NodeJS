const {Student} = require('../models/index');

module.exports = {
    getAll: async () => {
        return await Student.find({isDeleted: false}).populate({
            path: 'class',
            populate: { path: 'school' }
        }).lean();
    },

    create: async(student) => {
        student = new Student({
            name: student.name,
            gender: student.gender,
            phone: student.phone,
            email: student.email,
            birthday: student.birthday,
            class: {
                _id: student.class
            }
        });
        return await student.save();
    },

    findByID: async (id) => {
        return await Student.findOne({_id: id}).populate({
            path: 'class',
            populate: { path: 'school' },
        }).lean();
    },


    findStudentIDByClassID: async(classID) => {
        return await Student.find({class: classID}, '_id').lean();
    },

    findByClassID: async (id) => {
        return await Student.find({class: id}).populate({
            path: 'class',
            populate: { path: 'school' },
        }).lean();
    },


    update: async (id, student) => {
        return await Student.updateOne({_id: id}, student);
    },

    deleteByClassID: async(classID) => {
        return await Student.updateMany({class: classID}, {isDeleted: true});
    },

    deleteByID: async(id) => {
        return await Student.updateOne({_id: id}, {isDeleted: true});
    },
}