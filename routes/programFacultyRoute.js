const faculty = require('../controllers/programFacultyController');

module.exports = (app)=>{
    app.route('/programFaculties').get(faculty.getFaculties);
}