const faculty = require('../service/facultyService');

exports.getFaculties = (_, res) => {
    faculty.getFaculties().then(data => {
        res.send(data);
    })
}
