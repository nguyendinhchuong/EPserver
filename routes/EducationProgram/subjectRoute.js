const subject = require('../../controllers/EducationProgram/subjectController');

module.exports = (app) => {
    app.route('/subject/getlist').get(subject.getSubjectList);
    app.route('/subject/getbyid').get(subject.getSubjectById);
}