const db = require('../../models/index');

exports.getSubjectByEduProgId = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.subjecteduprog.findAll({
                    where: {
                        IdEduProg: request.IdEduProg
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

exports.getEduProgBySubjectId = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.subjecteduprog.findAll({
                    where: {
                        IdSubject: request.IdSubject
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

exports.addSubjectToEduProg = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.subjecteduprog.findOne({
                    where: {
                        IdSubject: request.IdSubject,
                        IdEduProg: request.IdEduProg
                    }
                })
                    .then(data => {
                        if (data) {
                            let code = -2;
                            resolve(code);
                        } else {
                            db.subjecteduprog.create(request)
                                .then(() => {
                                    let code = 1;
                                    resolve(code);
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