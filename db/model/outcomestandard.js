var db = require('../../models/index');


const outcomstandard = db.sequelize.define('outcomestandard', {
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
    Name: {
        type: db.Sequelize.STRING,
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
    db.sequelize.authenticate()
        .then(() => {
            return new Promise((resolve, reject) => {
                db.sequelize.query("select * from outcome_standard", { model: outcomstandard })
                    .then(outcomstandard => {
                        resolve(JSON.stringify(outcomstandard));
                    })
                    .catch(err => {
                        reject(err);
                    })
            })

        })
}
exports.addOS = (data) => {
    db.sequelize.authenticate()
        .then(() => {
            return new Promise((resolve, reject) => {
                let os = outcomstandard.build({
                    // IdFaculty: data.IdFaculty,
                    // IdProgram: data.IdProgram,
                    Name: data.Name
                    // createdAt: data.createdAt,
                    // updatedAt: data.updatedAt
                });
                os.save(() => {
                    console.log("save success")
                    resolve({
                        code: 1,
                        message: "Save success"
                    })
                });
            })

        })
        .catch(err => { throw err; })

}