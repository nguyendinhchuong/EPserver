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
        .catch(err => {
            throw err;
        })

}

exports.addSubjectBulk = (req, res) => {
    let body = req.body;
    let request = {};
    let array = JSON.parse(body.data);
    let new_array = [];
    array.data.map(subject => {
        let obj = {};
        obj.SubjectCode = subject.subjectcode;
        obj.SubjectName = subject.subjectname;
        obj.SubjectEngName = subject.subjectengname;
        obj.Credit = Number(subject.credit);
        obj.TheoryPeriod = Number(subject.theoryperiod);
        obj.PracticePeriod = Number(subject.practiceperiod);
        obj.ExercisePeriod = Number(subject.exerciseperiod);
        obj.Description = subject.description;
        obj.DateCreated = subject.datecreated;
        obj.DateEdited = subject.dateedited;
        new_array.push(obj);
    })
    request.data = new_array;
    subject.addSubjectBulk(request)
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
        .catch(err => {
            throw err;
        })
}