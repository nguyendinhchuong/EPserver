const faculty = require('../controllers/facultyController');

module.exports = (app) => {
    app.route('/faculties')
        .get(faculty.getFaculties)
}