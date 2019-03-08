var db = require('../../models/index');


const outcomestandard = db.sequelize.define('outcomestandard', {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    IdFaculty: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    IdProgram: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    IdUser: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    NameOutcomeStandard: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    SchoolYear: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: db.Sequelize.DATE
    },
    updatedAt: {
        type: db.Sequelize.DATE
    }
})


exports.getOS = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.sequelize.query("select * from outcomestandard", { model: outcomestandard })
                    .then(outcomestandard => {
                        resolve(JSON.stringify(outcomestandard));
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
    })

}
exports.addOS = (data) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {

                let os = outcomestandard.build({
                    IdFaculty: data.IdFaculty,
                    IdProgram: data.IdProgram,
                    IdUser:data.IdUser,
                    NameOutcomeStandard: data.NameOutcomeStandard,
                    SchoolYear: data.SchoolYear,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt
                });
                os.save(() => {
                    console.log("save success")
                    resolve({
                        code: 1,
                        message: "Save success"
                    })
                });
            })
            .catch(err => {
                reject(err);
            })
    })


}