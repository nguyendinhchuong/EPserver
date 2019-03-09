const db = require('../models/index');

exports.getProgram = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.sequelize.query("select * from program", { model: db.program })
                    .then(program => {
                        resolve(program)
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.getProgramInfo = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.program.findAll()
                    .then(info=>{
                        resolve(info);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}