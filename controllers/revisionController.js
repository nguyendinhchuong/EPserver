const revision = require('../service/revisionService');

exports.getRevision = (req, res)=>{
    let body = req.query;
    let request = {};
    request.IdOutcomeStandard = Number(body.idoutcome);
    revision.getRevision(request)
    .then(data=>{
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    })
}