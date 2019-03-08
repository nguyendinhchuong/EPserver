const outcomeStandard = require('../controllers/outcomeStandardController');

module.exports = (app) => {
    app.route('/getOutcomeStandards/').get();
    // xóa nên làm sau cùng (vì xóa chuẩn đầu ra này là phải xóa các phiên bản của nó)
    app.route('/deleteOutcomeStandard/:id').post();
    // thêm chuẩn đầu ra cần có tên chuẩn đầu ra, idFaculty, idProgram
    // nếu đã tồn tại chuẩn đầu ra cùng tên và ids thì k thêm vào trả về chuỗi đã tồn tại...
    app.route('/addOutcomeStandard/').post();
}