const db = require('../models/index');

exports.getRevision = (data) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.revision.findAll({
                    where: {
                        IdOutcomeStandard: data.IdOutcomeStandard
                    }
                })
                    .then(data => {
                        if (data) {
                            data.code = 1;
                            data.message = "success";
                            resolve(data);
                        } else {
                            data.code = -1;
                            data.message = "fail";
                            resolve(data);
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

exports.addRevision = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.outcomestandard.findById(request.IdOutcomeStandard)
                    .then(data => {
                        if (data) {
                            db.revision.create(request)
                                .then(data => {
                                    if (data) {
                                        let code = 1;
                                        resolve(code);
                                    } else {
                                        let code = -1;
                                        resolve(code);
                                    }
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        } else {
                            let code = -2;
                            resolve(code);
                        }
                    })
                    .catch(err=>{
                        reject(err);
                    })

            })
            .catch(err => {
                reject(err);
            })
    })
}