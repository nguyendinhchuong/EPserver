const eduprogram = require('../../service/EducationProgram/eduprogramService');

exports.getEduProgList = (req, res) => {
    eduprogram.getEduProgram()
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