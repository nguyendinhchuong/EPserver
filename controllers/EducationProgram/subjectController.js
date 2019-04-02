const subject = require('../../service/EducationProgram/subjectService');

exports.getSubjectList = (req, res) => {
    subject.getSubjectList()
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
exports.getSubjectById = (req, res) => {
    let params = req.query;
    let request = {};
    request.Id = Number(params.idsubject);
    subject.getSubjectById(request)
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

exports.addSubject = (req, res) => {
    let body = req.body;
    let request = {};
    request.SubjectCode = body.data.subjectcode;
    request.SubjectName = body.data.subjectname;
    request.SubjectEngName = body.data.subjectengname;
    request.Credit = Number(body.data.credit);
    request.TheoryPeriod = Number(body.data.theoryperiod);
    request.PracticePeriod = Number(body.data.practiceperiod);
    request.ExercisePeriod = Number(body.data.exerciseperiod);
    request.Description = body.data.description;
    request.DateCreated = body.data.datecreated;
    request.DateEdited = body.data.dateedited;
    subject.addSubject(request)
        .then(data => {
            let response = {};
            if (data === 1) {
                response.code = 1;
                response.message = "add success";
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "add fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err=>{
            throw err;
        })

}

exports.deleteSubject = (req, res) => {
    let params = req.query;
    let request = {};
    request.Id = Number(params.idsubject);
    subject.deleteSubject(request)
        .then(data => {
            let response = {};
            if (data === 1) {
                response.code = 1;
                response.message = "delete success";
                res.send(JSON.stringify(response));
            } else if (data === -2) {
                response.code = -2;
                response.message = "couldn't find this subject";
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "delete fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err=>{
            throw err;
        })
}