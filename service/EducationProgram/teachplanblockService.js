const db = require('../../models/index');

exports.getTeachPlanBlock = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.teachplanblock.findOne({
                    where: {
                        IdDetailEdu: request.IdDetailEdu
                    }
                })
                    .then(data => {
                        resolve(data);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.addTeachPlanBlock = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                
            })
            .catch(err => {
                reject(err);
            })
    })
}