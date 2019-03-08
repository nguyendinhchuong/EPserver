const faculty = require('../controllers/facultyController');

module.exports = (app) => {
    app.route('/getFaculties').get(faculty.getFaculties);
}