const outcomeStandard = require('../controllers/outcomeStandardController');

module.exports = (app) => {

    // tải thông tin của các chuẩn đầu ra trả về []
    // app.route('/getoutcomestandard').get(outcomeStandard.getOutcomeStandard);
    app.route('/getoutcomestandard').get(outcomeStandard.getOutcomeStandardInfo);
    // tải thông tin chuẩn đầu ra với id
    app.route('/getoutcomestandardinfo').get(outcomeStandard.getOutcomeStandardInfoById);
    // xóa nên làm sau cùng (vì xóa chuẩn đầu ra này là phải xóa các phiên bản của nó)
    app.route('/deleteoutcomestandard').post(outcomeStandard.deleteOutcomeStandard);
    // thêm chuẩn đầu ra cần có tên chuẩn đầu ra, idFaculty, idProgram
    // nếu đã tồn tại chuẩn đầu ra cùng tên và ids thì k thêm vào trả về chuỗi đã tồn tại...
    app.route('/addoutcomestandard').post(outcomeStandard.addOutcomeStandard);
    //đổi tên outcome
    app.route('/renameoutcomestandard').post(outcomeStandard.renameOutcomeStandard);
}