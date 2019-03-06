const outcomeStandard = require('../db/model/outcomestandard');


exports.getOutcomeStandards = (req, res) => {
    outcomeStandard.getOS().then(data => {
        res.send(data);
    });
}
exports.addOutcomeStandard = (req, res) =>{
    let body = req.query;
    outcomeStandard.addOutcomeStandard(body).then(mess =>{
        res.send(mess);
    })
}