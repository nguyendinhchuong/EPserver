const db = require('../../models/index');

exports.getDetailEduProgram = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.eduprogram.findOne({
                    where: {
                        Id: request.IdEduProgram
                    }
                })
                    .then(data => {
                        if (data) {
                            db.detaileduprog.findOne({
                                where: {
                                    IdEduProgram: request.IdEduProgram
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