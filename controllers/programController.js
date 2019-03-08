const program = require('../db/model/program');

exports.getProgram = (req, res) => {
    program.getProgram().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    })
}
