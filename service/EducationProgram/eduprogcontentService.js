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
                request.data.map(row => {
                    console.log(row)
                    if (!row.data.isTable) {
                        let obj = {};
                        obj.KeyRow = row.KeyRow;
                        obj.NameRow = row.data.name;
                        obj.Type = 0;
                        obj.IdEduProgram = request.IdEduProg;
                        obj.DateCreated = row.data.DateCreated;

                        db.eduprogcontent.create(obj)
                            .then(data => {
                                console.log(data);
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        let obj = {};
                        obj.KeyRow = row.KeyRow;
                        obj.NameRow = row.data.name;
                        obj.Type = row.data.isTable;
                        obj.IdEduProgram = request.IdEduProg;
                        obj.DateCreated = row.data.DateCreated;

                        db.eduprogcontent.create(obj)
                            .then(data => {
                                let subjectblock_obj = {};
                                subjectblock_obj.IdEduProgContent = data.dataValues.Id;
                                subjectblock_obj.Credit = row.data.totalCredits;
                                subjectblock_obj.isOptional = row.data.optionalCredit;
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