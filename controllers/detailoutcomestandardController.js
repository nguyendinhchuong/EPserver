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
exports.addDetailOutcomeStandard = (req, res) => {
    let params = req.query;
    let body = req.body;
    let request = {};
    let data =[];

    let array = JSON.parse(body.data);
    array.map(row=>{
        row.IdOutcomeStandard = params.idoutcome;
    })
    request.data = array;
    detailOS.addDetailOutcomeStandard(request)
    .then(data=>{
        let response = {};
        if (data === 1) {
            response.code = 1;
            response.message = "save success";
            res.send(JSON.stringify(response));
        } else {
            response.code = -1;
            response.message = "save fail";
            res.send(JSON.stringify(response));
        }
    })
}