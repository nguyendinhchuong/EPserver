var db = require('../../models/index');

const program = db.sequelize.define('program', {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NameProgram: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})


exports.getProgram = () => {
    db.sequelize.authenticate()
        .then(() => {
            db.sequelize.query("select * from program",{model: program})
                .then(program => { console.log(JSON.stringify(program)) })
        });
}