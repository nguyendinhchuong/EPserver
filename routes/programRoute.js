const program = require('../controllers/programController');

module.exports = (app) => {
    app.route('/getprogram').get(program.getPrograms);
    app.route('/getprograminfo').get(program.getProgramsInfo);
}