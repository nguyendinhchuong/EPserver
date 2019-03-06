const outcomeStandard = require('../controllers/outcomeStandardController');

module.exports = (app) => {
    app.route('/outcomestandards')
        .get(outcomeStandard.getOutcomeStandards)
        .post(outcomeStandard.addOutcomeStandard)
}