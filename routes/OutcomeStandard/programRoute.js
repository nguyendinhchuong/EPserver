const program = require('../../controllers/OutcomeStandard/programController');

module.exports = (app) => {
    app.route('/getprogram').get(program.getPrograms);
    app.route('/getprograminfo').get(program.getProgramsInfo);
}