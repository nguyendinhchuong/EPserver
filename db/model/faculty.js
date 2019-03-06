var db = require('../../models/index');

const faculty = db.sequelize.define('faculty', {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NameFaculty: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})


exports.getFaculty = () => {
    db.sequelize.authenticate()
        .then(() => {
            db.sequelize.query("select * from faculty",{model: faculty})
                .then(faculty => { console.log(JSON.stringify(faculty)) })
        });
}