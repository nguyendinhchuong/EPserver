const faculty = require('../db/model/faculty');

exports.getFaculty = (req, res) => {
    outcomeStandard.getFaculty().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    });
}