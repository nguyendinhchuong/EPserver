const revision = require('../service/revisionService');

exports.getRevision = (req, res)=>{
    let body = req.query;
    let request = {};
    request.IdOutcomeStandard = Number(body.idoutcome);
    revision.getRevision(request)
    .then(data=>{
        res.send(JSON.stringify(data));
    })
}