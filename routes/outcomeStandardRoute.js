const outcomeStandard = require('../controllers/outcomeStandardController');

module.exports = (app)=>{
    app.route('/outcomeStandard').get(outcomeStandard.getAllOutcomeStandard);
}