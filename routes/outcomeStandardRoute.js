const faculty = require('../controllers/outcomeStandardController');

module.exports = (app)=>{
    app.route('/outcomeStandards').get(faculty.getFaculties);
}