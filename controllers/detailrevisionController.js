const detailRevision = require('../service/detailrevisionService');

exports.getDetailRevision = (req, res) => {
    let body = req.query;
    let request = {};    
    request.IdRevision = Number(body.idrevision);
    detailRevision.getDetailRevision(request)
        .then(data => {
            let response = {};
            response.data = data;
            res.send(JSON.stringify(response))
        });
}