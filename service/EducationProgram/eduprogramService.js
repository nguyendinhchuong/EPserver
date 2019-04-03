const db = require('../../models/index');

exports.getEduProgram = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                let sql = `SELECT edu.Id, edu.EduName, edu.EduEngName, level.LevelName, major.MajorCode, major.MajorName, major.MajorEngName, prog.NameProgram
                FROM cdio.eduprogram AS edu, cdio.level AS level, cdio.major AS major, cdio.program AS prog
                WHERE edu.IdLevel = level.Id AND edu.IdMajor = major.Id AND edu.IdProgram = prog.Id;
                `
                db.sequelize.query(sql, { type: db.Sequelize.QueryTypes.SELECT })
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

exports.getEduProgramById = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                let sql = `SELECT edu.Id, edu.EduName, edu.EduEngName, level.LevelName, major.MajorCode, major.MajorName, major.MajorEngName, prog.NameProgram
                FROM cdio.eduprogram AS edu, cdio.level AS level, cdio.major AS major, cdio.program AS prog
                WHERE edu.IdLevel = level.Id AND edu.IdMajor = major.Id AND edu.IdProgram = prog.Id AND edu.Id = `+ request.Id + `;`;
                db.sequelize.query(sql, { type: db.Sequelize.QueryTypes.SELECT })
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

exports.addEduProgram = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.eduprogram.create(request)
                    .then(() => {
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

exports.deleteEduProgram = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.subjecteduprog.findAll({
                    where: {
                        IdEduProg: request.Id
                    }
                })
                    .then(data => {
                        if (data) {
                            db.subjecteduprog.destroy({
                                where: {
                                    IdEduProg: request.Id
                                }
                            })
                                .then(effectedRows => {
                                    console.log("Effected rows of SubjectEduProg: " + effectedRows);
                                })
                                .then(() => {
                                    db.eduprogram.destroy({
                                        where: {
                                            Id: request.Id
                                        }
                                    })
                                        .then(effectedRows => {
                                            console.log("Effected rows of EduProgram: " + effectedRows);
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
                        } else {
                            db.eduprogram.destroy({
                                where: {
                                    Id: request.Id
                                }
                            })
                                .then(effectedRows => {
                                    console.log("Effected rows of EduProgram: " + effectedRows);
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

exports.addSubjectToEduProg = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.subjecteduprog.create(request)
                    .then(() => {
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

exports.addSubjectBulkToEduProg = (request)=>{
    
}