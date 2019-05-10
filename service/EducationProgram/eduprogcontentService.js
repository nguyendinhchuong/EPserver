const db = require('../../models/index');

exports.getEduContentByEduId = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.eduprogcontent.findAll({
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
            })
            .catch(err => {
                reject(err);
            })
    })
}
// exports.addEduContent = (request) => {
//     return new Promise((resolve, reject) => {
//         db.sequelize.authenticate()
//             .then(() => {
//                 db.eduprogcontent.bulkCreate(request, { returning: true })
//                     .then(() => {
//                         let code = 1;
//                         resolve(code);
//                     })
//                     .catch(err => {
//                         reject(err);
//                     })
//             })
//             .catch(err => {
//                 reject(err);
//             })
//     })
// }
exports.addEduContent = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                let code;
                let UnTableObj = [];
                let TableObj = [];
                request.data.map(row => {
                    if (!row.Type) {
                        let obj = {};
                        obj.KeyRow = row.KeyRow;
                        obj.NameRow = row.NameRow;
                        obj.Type = 0;
                        obj.IdEduProgram = request.IdEduProg;
                        obj.DateCreated = row.DateCreated;
                        db.eduprogcontent.create(obj)
                            .then(data => {
                                console.log("created");
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        console.log("here");
                        let obj = {};
                        obj.KeyRow = row.KeyRow;
                        obj.NameRow = row.NameRow;
                        obj.Type = 1;
                        obj.IdEduProgram = request.IdEduProg;
                        obj.DateCreated = row.DateCreated;

                        db.eduprogcontent.create(obj)
                            .then(data => {
                                row.subjects.map(subject => {
                                    let subjectblock_obj = {};
                                    subjectblock_obj.IdEduProgContent = data.dataValues.Id;
                                    subjectblock_obj.Credit = subject.Credits;
                                    subjectblock_obj.isAccumulated = subject.isAccumulated;
                                    subjectblock_obj.DateCreated = subject.DateCreated;
                                    subjectblock_obj.KeyRow = subject.KeyRow;
                                    subjectblock_obj.NameBlock = subject.NameBlock;

                                    db.subjectblock.create(subjectblock_obj)
                                        .then(data => {
                                            console.log(data.dataValues);
                                        })
                                        .catch(err => {
                                            reject(err);
                                        })
                                })



                            })
                            .catch(err => {
                                reject(err);
                            })
                    }

                })
            })
            .catch(err => {
                reject(err);
            })
    })
}