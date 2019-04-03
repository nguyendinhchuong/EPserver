const eduprogram = require('../../controllers/EducationProgram/eduprogramController');

module.exports = (app) => {
    app.route('/eduprogram/getlist').get(eduprogram.getEduProgList);    

    
}