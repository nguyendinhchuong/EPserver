const program = require('../../service/OutcomeStandard/programService');

exports.getPrograms = (req, res) => {
    program.getProgram().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    })
}
exports.getProgramsInfo = (req, res) => {
    program.getProgramInfo().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    })
}
