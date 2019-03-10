const detailRevision = require('../controllers/detailRevisionController');

module.exports = (app) => {
    app.route('/getdetailrevision').get(detailRevision.getDetailRevision);
    // lưu detail phiên bản cần có id của phiên bản (lưu lại chính phiên bản này trong db)
    app.route('/saveDetailRevision/:id').post();
    // thêm detail phiên bản cần có id của chuẩn đầu ra và tên của phiên bản (id của người thêm NẾU CẦN)
    app.route('/addDetailRevision/:idOutcomeStandard').post();
}