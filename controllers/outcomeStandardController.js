const faculty = require('../service/outcomeStandard');

exports.getFaculties = (_, res) => {
    faculty.getFaculties().then(data => {
        res.send(data);
    });
}
