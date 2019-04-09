const edupurpose = require('../../service/EducationProgram/edupurposeService');

exports.getEduPurpose = (req, res) => {
    let params = req.query;
    let request = {};
    request.IdDetailEduProg = Number(params.iddetaileduprogram);
    edupurpose.getEduPurpose(request)
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