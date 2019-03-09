const faculty = require('../service/facultyService');

exports.getFaculty = (req, res) => {
    faculty.getFaculty().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    });
}
exports.getFacultyInfo = (req, res) => {
    faculty.getFacultyInfo().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    });
}