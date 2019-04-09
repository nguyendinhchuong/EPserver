const subjecteduprog = require('../../controllers/EducationProgram/subjecteduprogController');

module.exports = (app) => {
    app.route('/subjecteduprog/geteduprog').get(subjecteduprog.getEduProgBySubjectId);
    app.route('/subjecteduprog/getsubject').get(subjecteduprog.getSubjectByEduProgId);

    app.route('/subjecteduprog/addsubject').post(subjecteduprog.addSubjectToEduProg);
}