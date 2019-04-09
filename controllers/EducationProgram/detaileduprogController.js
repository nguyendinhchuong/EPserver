const detaileduprogram = require('../../service/EducationProgram/detaileduprogService');

exports.getDetailEduProg = (req, res) => {
    let params = req.query;
    let request = {};
    request.IdEduProgram = Number(params.ideduprog);
    detaileduprogram.getDetailEduProgram(request)
        .then(data => {
            let response = {};
            if (data) {
                response.code = 1;
                response.message = "success";
                response.data = data;
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "fail";
                response.data = data;
                res.send(JSON.stringify(response));
            }
        })
}