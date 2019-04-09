const db = require('../../models/index');

exports.getEduPurpose = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.detaileduprog.findOne({
                    where: {
                        Id: request.IdDetailEduProg
                    }
                })
                    .then(data => {
                        if (data) {
                            db.edupurpose.findAll({
                                where: {
                                    IdDetail: request.IdDetailEduProg
                                }
                            })
                                .then(data => {
                                    resolve(data);
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        }
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

exports.addEduPurpose = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.edupurpose.bulkCreate(request.data)
                    .then(()=>{
                        let code = 1;
                        resolve(code);
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