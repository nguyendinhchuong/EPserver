const outcomeStandard = require('../service/outcomeStandardService');

exports.getOutcomeStandards = (_, res) => {
    outcomeStandard.getOutcomeStandards().then(data => {
        res.send(data);
    });
}
