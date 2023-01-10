const { Class } = require('../models/index');

module.exports = {
  getAll: async () => {
    return await Class.find({ isDeleted: false }).populate('school').lean();
  },

  create: async (object) => {
    object = new Class({
      name: object.name,
      school: {
        _id: object.school
      },
      isDeleted: false,
    });
    return await object.save();
  },

  findClassesBySchoolID: async (schoolID) => {
    return await Class.find({isDeleted: false, school: schoolID}).populate('school').lean();
  },

  findById: async(id) => {
    return await Class.findOne({_id: id}).populate('school').lean();
  },

  findClassIDBySchoolID: async(schoolID) => {
    return await Class.find({school: schoolID}, '_id').lean();
  },

  update: async(id, _class) => {
    return await Class.findOneAndUpdate({_id: id}, _class);
  },

  deleteBySchoolID: async(schoolID) => {
    return await Class.updateMany({school: schoolID}, {isDeleted: true});
  },

  deleteByID: async(id) => {
    return await Class.updateOne({_id: id}, {isDeleted: true});
  },
};
