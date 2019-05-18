const eduprogcontent = require('../../service/EducationProgram/eduprogcontentService');

exports.getEduProgContent = (req, res) => {
    let params = req.query;
    let request = {};
    let response = {};
    if(isNaN(params.ideduprog)){
        response.code = -1;
        response.message = "fail";
        res.send(JSON.stringify(response));
    }
    request.IdEduProg = +params.id;
    eduprogcontent.getEduContentByEduId(request)
        .then(data => {
            let response = {};
            console.log(data);
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
    const params = req.query;
    const body = JSON.parse(req.body.data);
    const request = {};
    request.IdEduProg = +params.ideduprog;
    request.data = body;

    // for test postman
    //request.IdEduProg = 6;
    //request.data = req.data
    
    eduprogcontent.addEduContent(request)
        .then(data => {
            let response = {};
            if (data) {
                response.code = data;
                response.message = "success";
                res.send(JSON.stringify(response));
            } else {
                response.code = data;
                response.message = "fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err => {
            throw err;
        })
}
