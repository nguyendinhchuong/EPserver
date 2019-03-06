var db = require('../../models/index');

const programfaculty = db.sequelize.define('programfaculty', {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    IdProgram: {
        type: db.Sequelize.INTEGER
    },
    IdFaculty: {
        type: db.Sequelize.INTEGER
    },
    createAt:{
        type: db.Sequelize.DATE,
        allowNull: false
    },
    updateAt:{
        type: db.Sequelize.DATE,
        allowNull: false
    }
})


exports.getProgramFaculty = () => {
    db.sequelize.authenticate()
        .then(() => {
            db.sequelize.query("select * from programfaculty",{model: programfaculty})
                .then(programfaculty => { console.log(JSON.stringify(programfaculty)) })
        });
}