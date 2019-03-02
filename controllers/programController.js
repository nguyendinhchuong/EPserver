const program = require('../service/programService');

exports.getPrograms = (_, res) => {
    program.getPrograms().then(data => {
        res.send(data);
    })
}
