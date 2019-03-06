var db = require('../../models/index');

const listoutcomstandard = db.sequelize.define('listoutcomestandard', {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    IdOutcome: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    KeyOutcomeStandard: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    NameOutcomeStandard: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})


exports.getListOutcomeStandard = () => {
    db.sequelize.authenticate()
        .then(() => {
            db.sequelize.query("select * from listoutcomestandard",{model: listoutcomstandard})
                .then(listoutcomstandard => { console.log(JSON.stringify(listoutcomstandard)) })
        });
}