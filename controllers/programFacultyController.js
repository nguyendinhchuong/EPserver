const programFaculty = require('../service/programFacultyService');

exports.getDetailProgramFaculty = (req, res) => {
    programFaculty.getDetailProgramFaculty(req.params.id).then(data => {
        res.send(data);
    })
}
