const programFaculty = require('../controllers/programFacultyController');

module.exports = (app)=>{
    app.route('/programFaculty/:id').get(programFaculty.getDetailProgramFaculty);
}