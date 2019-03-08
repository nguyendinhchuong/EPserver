const outcomeStandard = require('../controllers/outcomeStandardController');

module.exports = (app) => {

    // tải thông tin của các chuẩn đầu ra trả về []
    app.route('/getoutcomestandard').get(outcomeStandard.getOutcomeStandard);
    // tải thông tin chuẩn đầu ra với id
    app.route('/getOutcomeStandards/:id').get();
    // xóa nên làm sau cùng (vì xóa chuẩn đầu ra này là phải xóa các phiên bản của nó)
    app.route('/deleteOutcomeStandard/:id').post();
    // thêm chuẩn đầu ra cần có tên chuẩn đầu ra, idFaculty, idProgram
    // nếu đã tồn tại chuẩn đầu ra cùng tên và ids thì k thêm vào trả về chuỗi đã tồn tại...
    app.route('/addoutcomestandard').post(outcomeStandard.addOutcomeStandard);
}