const edupurpose = require('../../controllers/EducationProgram/edupurposeController');

module.exports = (app) => {
    app.route('/edupurpose/get').get(edupurpose.getEduPurpose);  
}