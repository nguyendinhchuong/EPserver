const detailblock = require('../../controllers/EducationProgram/detailblockController');

module.exports = (app) => {
    app.route('/detailblock/getsubject').get(detailblock.getSubjectBySubjectBlockId);

    app.route('/detailblock/add').post(detailblock.addSubjectToDetailBlock);
}