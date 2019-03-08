const program = require('../controllers/programController');

module.exports = (app) => {
    app.route('/getPrograms').get(program.getPrograms);
}