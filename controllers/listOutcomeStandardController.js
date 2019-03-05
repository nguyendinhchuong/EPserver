const listOutcomeStandard = require('../service/listOutcomeStandardService');

exports.getlistOfOutcomeStandard = (req, res) => {
    listOutcomeStandard.getlistOfOutcomeStandard(req.params.id).then(data => {
        res.send(data);
    })
}

exports.insertListOfOutcomeStandard = (req,res) =>{
    listOutcomeStandard.insertlistOfOutcomeStandards(req.body).then(data => {
        res.send(data);
    })
}

