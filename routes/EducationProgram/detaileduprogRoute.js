const detaileduprogram = require('../../controllers/EducationProgram/detaileduprogController');

module.exports = (app) => {
    app.route('/detaileduprogram/get').get(detaileduprogram.getDetailEduProg);  
}