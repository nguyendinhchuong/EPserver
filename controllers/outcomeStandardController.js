const outcomeStandard = require('../service/programService');

exports.getAllOutcomeStandard = (req, res) => {
    outcomeStandard.loadAll().then(data => {
        console.log(data);
        res.send(data);
    })
}
