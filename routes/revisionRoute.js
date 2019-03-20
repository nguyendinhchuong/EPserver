const revision = require('../controllers/revisionController');

module.exports = (app) => {
    // lấy thông tin tất cả phiên bản thuộc chuẩn đầu ra này
    app.route('/getrevision').get(revision.getRevision);
    //lấy thông tin của một phiên bản theo id
    app.route('/getrevisionbyid').get(revision.getRevisionInfoById);
    // xóa phiên bản với id và detail của phiên bản
    app.route('/deleterevision').post(revision.deleteRevision);
    // thêm phiên bản cần có id của chuẩn đầu ra và tên của phiên bản (id của người thêm NẾU CẦN)
    app.route('/addrevision').post(revision.addRevision);
}