const faculty = require('../../controllers/OutcomeStandard/facultyController');

module.exports = (app) => {
    app.route('/getfaculty').get(faculty.getFaculty);
    app.route('/getfacultyinfo').get(faculty.getFacultyInfo);
}