const faculty = require('../../controllers/OutcomeStandard/facultyController');

module.exports = (app) => {
    app.route('/getfaculty').get(faculty.getFaculty);
    app.route('/getfacultyinfo').get(faculty.getFacultyInfo);

    app.route('/faculty/add').post(faculty.addFaculty);
    app.route('/faculty/addbulk').post(faculty.addBulkFaculty);
    app.route('/faculty/delete').post(faculty.deleteFaculty);
}