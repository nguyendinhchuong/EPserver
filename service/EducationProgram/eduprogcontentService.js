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
                let code = -1;
                const contentProg = {};
                request.data.map(row => {
                    const isTable = row.data.isTable;
                    if (!isTable) {
                        contentProg.KeyRow = row.key;
                        contentProg.NameRow = row.data.name;
                        contentProg.Type = 0;
                        contentProg.IdEduProgram = request.IdEduProg;
                        contentProg.DateCreated = null;
                        db.eduprogcontent.create(contentProg)
                            .then(data => {
                                code = 201;
                                resolve(code);
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        contentProg.KeyRow = row.key;
                        contentProg.NameRow = "";
                        contentProg.Type = 1;
                        contentProg.IdEduProgram = request.IdEduProg;
                        contentProg.DateCreated = null;

                        db.eduprogcontent.create(contentProg)
                            .then(data => {
                                const blocks = groupBy(row.data.subjects, item =>{
                                    return item.nameBlock;
                                  });
                                blocks.map(subjects => {
                                    const block = subjects[0];
                                    const subjectBlock = {};
                                    subjectBlock.IdEduProgContent = data.Id;
                                    subjectBlock.Credit = block.nameBlock.startsWith("BB") ? 0 : block.optionCredit;
                                    subjectBlock.isAccumulated = block.isAccumulation;
                                    subjectBlock.DateCreated = block.DateCreated;
                                    subjectBlock.KeyRow = block.parentKey;
                                    subjectBlock.NameBlock = block.nameBlock;

                                    db.subjectblock.create(subjectBlock)
                                        .then(blockCreation => {
                                            subjects.map((subject =>{
                                                const detailBlock = {};
                                                detailBlock.IdSubjectBlock = blockCreation.Id;
                                                detailBlock.IdSubject = subject.Id;
                                                detailBlock.DateCreated = subject.DateCreated;
                                                db.detailblock.create(detailBlock)
                                                .then(data =>{
                                                    code = 201;
                                                    resolve(code);
                                                })
                                                .catch(err=>{
                                                    reject(err);
                                                })
                                            }))
                                            code = 201;
                                            resolve(code);
                                        })
                                        .catch(err => {
                                            reject(err);
                                        })
                                })
                                code = 201;
                                resolve(code);
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


const groupBy = (array, f) => {
    let groups = {};
    array.forEach(subject => {
      let group = JSON.stringify(f(subject));
      groups[group] = groups[group] || [];
      groups[group].push(subject);
    });
    return Object.keys(groups).map(group => {
      return groups[group];
    });
  };