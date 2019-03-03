const outcomeStandard = require('../controllers/outcomeStandardController');

module.exports = (app)=>{
    app.route('/outcomeStandards').get(outcomeStandard.getOutcomeStandards);
}