const lisOutcomeStandard = require('../controllers/listOutcomeStandardController');

module.exports = (app)=>{
    app.route('/listOutcomeStandard/:id').get(lisOutcomeStandard.getlistOfOutcomeStandard);
}