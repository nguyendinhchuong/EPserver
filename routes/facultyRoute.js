const faculty = require('../controllers/facultyController');

module.exports = (app) => {
    app.route('/getfaculty').get(faculty.getFaculty);
    app.route('/getfacultyinfo').get(faculty.getFacultyInfo);
}