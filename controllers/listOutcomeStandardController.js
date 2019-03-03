const programFaculty = require('../service/listOutcomeStandardService');

exports.getlistOfOutcomeStandard = (req, res) => {
    programFaculty.getlistOfOutcomeStandard(req.params.id).then(data => {
        res.send(data);
    })
}
