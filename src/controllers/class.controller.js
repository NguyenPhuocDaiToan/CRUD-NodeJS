const httpStatus = require('http-status');
const {classService, schoolService, studentService} = require('../services/index');

module.exports = {
    getAll: async (req, res) => {
        const data = await classService.getAll();
        res.render('partials/classes/list', {classes: data});
    },

    showFormCreate: async (req, res) => {
        const p = req.query.prepath;
        const schools = await schoolService.getAll();
        res.render('partials/classes/create', {schools});
    },

    create: async (req, res) => {
        const data = await classService.create(req.body);
        if(req.body.prepath == undefined) {
            res.redirect('/classes');
        } else {
            res.redirect(req.body.prepath);
        }
    },
    
    findClassesBySchoolID: async (req, res) => {
        const data = await classService.findClassesBySchoolID(req.params.schoolID);
        res.status(httpStatus.OK).send(data);
    },

    showFormEdit: async (req, res) => {
        const _class = await classService.findById(req.params.id);
        const schools = await schoolService.getAll();
        res.render('partials/classes/edit', {
           _class: _class,
           schools: schools 
        });
    },

    update: async(req, res) => {
        await classService.update(req.params.id, req.body);
        res.redirect('/classes');
    },

    delete: async(req, res) => {
        await classService.deleteByID(req.params.id);
        await studentService.deleteByClassID(req.params.id);
        res.redirect('/classes');
    },

    detail: async (req, res) => {
        const _class = await classService.findById(req.params.id);
        const students = await studentService.findByClassID(req.params.id);
        res.render('partials/classes/detail', {
            class: _class,
            students,
        })
    },
}