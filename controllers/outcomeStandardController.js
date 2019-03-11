const outcomeStandard = require('../service/outcomeStandardService');


exports.getOutcomeStandard = (req, res) => {
    outcomeStandard.getOS().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    });
}
exports.getOutcomeStandardInfo = (req, res) => {
    outcomeStandard.getOSInfo().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    })
        .catch(err => {
            throw err;
        })
}
exports.getOutcomeStandardInfoById = (req, res) => {
    let params = req.query;
    let request = {};
    request.Id = params.IdOutcome;
    outcomeStandard.getOSInfoById(request)
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
exports.addOutcomeStandard = (req, res) => {
    let body = req.query;
    let request = {};

    request.IdFaculty = Number(body.IdFaculty);
    request.IdProgram = Number(body.IdProgram);
    request.IdUser = Number(body.IdUser);
    request.NameOutcomeStandard = body.NameOutcomeStandard;
    request.SchoolYear = body.SchoolYear;
    request.DateCreated = body.DateCreated;
    request.DateEdited = body.DateEdited;

    outcomeStandard.addOS(request)
        .then(data => {
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
        });
}