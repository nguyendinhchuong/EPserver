const revision = require('../controllers/revisionController');

module.exports = (app) => {
    // lấy thông tin tất cả phiên bản thuộc chuẩn đầu ra này
    app.route('/getrevision').get(revision.getRevision);
    // xóa phiên bản với id và detail của phiên bản
    app.route('/deleteRevision/:id').post();
    // thêm phiên bản cần có id của chuẩn đầu ra và tên của phiên bản (id của người thêm NẾU CẦN)
    app.route('/addRevision/:idOutcomeStandard').post();
}