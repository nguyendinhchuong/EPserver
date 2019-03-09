var db = require('../../models/index');

module.exports = (sequelize, Sequelize) => {
    const detailoutcomstandard = sequelize.define('detailoutcomestandard', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        IdOutcome: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        KeyOutcomeStandard: {
            type: Sequelize.STRING,
            allowNull: false
        },
        NameOutcomeStandard: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return detailoutcomstandard;
}




// exports.getListOutcomeStandard = () => {
//     db.sequelize.authenticate()
//         .then(() => {
//             db.sequelize.query("select * from listoutcomestandard", { model: listoutcomstandard })
//                 .then(listoutcomstandard => { console.log(JSON.stringify(listoutcomstandard)) })
//         });
// }