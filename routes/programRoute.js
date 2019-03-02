const program = require('../controllers/programController');

module.exports = (app)=>{
    app.route('/programs').get(program.getPrograms);
}