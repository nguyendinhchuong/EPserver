const outcomeStandard = require('../db/model/outcomestandard');


exports.getOutcomeStandard = (req, res) => {
    outcomeStandard.getOS().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    });
}
exports.addOutcomeStandard = (req, res) =>{
    let body = req.query;
    let response = {};
    response.data = body;
    res.send(JSON.stringify(response));    
    // outcomeStandard.addOutcomeStandard(body).then(mess =>{
    //     res.send(mess);
    // })
}