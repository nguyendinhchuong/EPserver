const eduprogcontent = require('../../service/EducationProgram/eduprogcontentService');

exports.getEduProgContent = (req, res) => {
    let params = req.query;
    let request = {};
    request.IdEduProg = Number(params.ideduprog);

    eduprogcontent.getEduContentByEduId(request)
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
        .catch(err => {
            throw err;
        })
}

exports.addEduProgContent = (req, res) => {
    let params = req.query;
    let body = JSON.parse(req.body.data);
    let request = {};
    request.IdEduProg = Number(params.ideduprog);
    request.data = body;
    eduprogcontent.addEduContent(request)
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
        .catch(err => {
            throw err;
        })
}