const detailOutcomeStandard = require('../../controllers/OutcomeStandard/detailOutcomeStandardController');

module.exports = (app) => {
    // load detail của chuẩn đầu ra với id
    app.route('/getdetailoutcomestandard').get(detailOutcomeStandard.getDetailOutcomeStandardInfo);
    // lưu lại detail của chuẩn đầu ra với id
    app.route('/saveDetailOutcomeStandard/:idOutcomestandard').post();
    // add detail có idOutcomestandard (thường là add OutcomeStandard xong thì sẽ add detail)
    app.route('/adddetailoutcomestandard').post(detailOutcomeStandard.addDetailOutcomeStandard);

    app.route('/deldetailoutcomestandard').post(detailOutcomeStandard.deleteDetailOutcomeStandard);
}