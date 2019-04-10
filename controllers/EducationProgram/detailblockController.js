const detailblock = require('../../service/EducationProgram/detailblockService');

exports.getSubjectBySubjectBlockId = (req, res) => {
    let params = req.query;
    let request = {};
    request.IdSubjectBlock = Number(params.idsubjectblock);

    detailblock.getSubjectBySubjectBlockId(request)
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

exports.addSubjectToDetailBlock = (req, res) => {
    let body = JSON.parse(req.body.data);
    let request = {};

    request.IdSubjectBlock = Number(body.idsubjectblock);
    request.IdSubject = Number(body.idsubject);
    request.DateCreated = body.datecreated;
    detailblock.addSubjectToDetailBlock(request)
        .then(data => {
            let response = {};
            if (data === 1) {
                response.code = 1;
                response.message = "success";
                res.send(JSON.stringify(response));
            } else if (data === -2) {
                response.code = -2;
                response.message = "subject is used in this block";
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err => {
            throw err;
        })

}