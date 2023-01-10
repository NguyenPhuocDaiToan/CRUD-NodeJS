const {studentService, classService, schoolService} = require('../services/index');
module.exports = {
    getAll: async (req, res) => {
        const students = await studentService.getAll();
        res.render('partials/students/list', {students});
    },

    showFormCreate: async (req, res) => {
        const schools = await schoolService.getAll();
        res.render('partials/students/create', {schools});
    },

    create: async(req, res) => {
        const prepath = req.body.prepath;

        await studentService.create(req.body);
        res.redirect(prepath == undefined ? '/students' : prepath);
    },

    showFormEdit: async (req, res) => {
        const student = await studentService.findByID(req.params.id);
        const schools = await schoolService.getAll();
        const classes = await classService.findClassesBySchoolID(student.class.school._id);
        res.render('partials/students/edit', {
            student: student, 
            schools: schools,
            classes: classes,
        });
    },

    update: async(req, res) => {
        await studentService.update(req.params.id, req.body);
        res.redirect('/students');
    },
    
    delete: async(req, res) => {
        await studentService.deleteByID(req.params.id);
        res.redirect('/students');
    }
}