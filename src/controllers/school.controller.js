// const httpStatus = require('http-status'); // API
const { studentController } = require('.');
const {schoolService, classService, studentService} = require('../services/index');
const catchAsync = require('../utils/catchAsync');
module.exports = {
    getAll: catchAsync(async (req, res) => {
        const schools = await schoolService.getAll();
        res.render('partials/schools/list', {schools});
    }),

    showFormCreate: catchAsync((req, res) => {
        res.render('partials/schools/create');
    }),

    create: catchAsync(async (req, res) => {
        await schoolService.create(req.body);
        res.redirect('/schools');
    }),

    showFormEdit: catchAsync(async (req, res) => {
        const school = await schoolService.findById(req.params.id);
        res.render('partials/schools/edit', {school: school.toObject()});
    }),

    update: catchAsync(async (req, res) => {
        await schoolService.update(req.params.id, req.body);
        res.redirect('/schools');
    }),

    delete: catchAsync(async (req, res) => {
        await schoolService.delete(req.params.id);
        await classService.deleteBySchoolID(req.params.id);
        const classeIDs = await classService.findClassIDBySchoolID(req.params.id);
        await classeIDs.forEach(c => {
            studentService.deleteByClassID(c._id);
        });
        res.redirect('/schools');
    }),

    detail: catchAsync(async (req, res) => {
        const school = await schoolService.findById(req.params.id);
        const classes = await classService.findClassesBySchoolID(req.params.id);
        res.render('partials/schools/detail', {
            school, classes
        });
    }),
}