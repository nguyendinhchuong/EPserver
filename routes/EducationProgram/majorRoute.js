const Major = require('../../controllers/EducationProgram/majorController');

module.exports = (app) => {
    app.route('/major/getlist').get(Major.getMajorList);
    // app.route('/level/getbyid').get(Level.getLevelById);

    // app.route('/level/add').post(Level.addLevel);
    // app.route('/level/addlist').post(Level.addLevelBulk);
    // app.route('/level/delete').post(Level.deleteLevel);
}