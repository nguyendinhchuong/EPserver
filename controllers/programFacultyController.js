const faculty = require('../service/programFacultyService');

exports.getFaculties = (_, res) => {
    faculty.getFaculties().then(data => {
        res.send(data);
    });
}
