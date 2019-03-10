const detailOS = require('../service/detailoutcomestandardService');

exports.getDetailOutcomeStandardInfo = (req, res) => {
    let body = req.query;
    let request = {};
    console.log(body)
    request.IdOutcomeStandard = Number(body.idoutcome);
    console.log(request);
    detailOS.getDetailOutcomeStandard(request)
        .then(mess => {
            res.send(JSON.stringify(mess))
        });
}