
const db = require('../models/index');


exports.getOS = () => {
  return new Promise((resolve, reject) => {
    db.sequelize.authenticate()
      .then(() => {
        db.sequelize.query("select * from outcomestandard", { model: db.outcomestandard })
          .then(outcomestandard => {
            resolve(outcomestandard);
          })
          .catch(err => {
            reject(err);
          })
      })
  })
}
exports.getOSInfoById = (request) => {
  return new Promise((resolve, reject) => {
    db.sequelize.authenticate()
      .then(() => {
        let sql = `SELECT os.Id, os.NameOutcomeStandard, os.SchoolYear, os.DateCreated, os.DateEdited, fa.NameFaculty, pg.NameProgram, cdio.user.NameUser
      FROM cdio.outcomestandard AS os, cdio.faculty AS fa, cdio.program AS pg, cdio.user
      WHERE os.Id = `+ request.Id + ` and os.IdFaculty = fa.Id and os.IdProgram = pg.Id and os.IdUser = cdio.user.Id;`;
        console.log(request.Id);
        db.sequelize.query(sql, { type: db.Sequelize.QueryTypes.SELECT })
          .then(data => {
            console.log(data);
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
exports.getOSInfo = () => {
  return new Promise((resolve, reject) => {
    db.sequelize.authenticate()
      .then(() => {
        // db.outcomestandard.findAll({
        //   include: [
        //     {
        //       model: db.faculty
        //     }
        //   ]
        // })
        //   .then(info => {
        //     resolve(info);
        //   })
        //   .catch(err=>{
        //     reject(err);
        //   })
        db.sequelize.query(`SELECT os.Id, os.NameOutcomeStandard, os.SchoolYear, os.DateCreated, os.DateEdited, fa.NameFaculty, pg.NameProgram, cdio.user.NameUser 
        FROM cdio.outcomestandard as os, cdio.faculty as fa, cdio.program as pg, cdio.user
        WHERE os.IdFaculty = fa.Id AND os.IdProgram = pg.Id AND os.IdUser = cdio.user.Id `, { type: db.Sequelize.QueryTypes.SELECT })
          .then(info => {
            resolve(info);
          })
          .catch(err => {
            reject(err);
          })
      })
  })
}
exports.addOS = (data) => {
  return new Promise((resolve, reject) => {
    db.sequelize.authenticate()
      .then(() => {
        let os = db.outcomestandard.build({
          IdFaculty: data.IdFaculty,
          IdProgram: data.IdProgram,
          IdUser: data.IdUser,
          NameOutcomeStandard: data.NameOutcomeStandard,
          SchoolYear: data.SchoolYear,
          DateCreated: data.DateCreated,
          DateEdited: data.DateEdited
        });
        os.save()
          .then((data) => {
            let revision = {};
            revision.IdOutcomeStandard = data.Id;
            revision.IdUser = data.IdUser;
            revision.NameRevision = data.NameOutcomeStandard;
            revision.DateUpdated = data.DateCreated;

            db.revision.create(revision)
              .then(() => {
                let code = 1;
                resolve(code);
              })
              .catch(err => {
                reject(err);
              });
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  })


}

exports.deleteOutcomeStandard = (request) => {
  return new Promise((resolve, reject) => {
    db.sequelize.authenticate()
      .then(() => {
        db.outcomestandard.findById(request.Id)
          .then(data => {
            //if outcomestandard exists, find the detail in detailoutcome
            if (data) {
              db.detailoutcomestandard.findAll({
                where: {
                  IdOutcomeStandard: request.Id
                }
              })
                .then(dataDetail => {
                  //if detail exists, delete it
                  if (dataDetail) {
                    db.detailoutcomestandard.destroy({
                      where: {
                        IdOutcomeStandard: request.Id
                      }
                    })
                      .then(effectedRows => {
                        console.log('Effected rows of Detail Outcome: ' + effectedRows);
                      })
                      .catch(err => {
                        reject(err);
                      })
                  }
                })
                .then(() => {
                  db.revision.findAll({
                    where: {
                      IdOutcomeStandard: request.Id
                    }
                  })
                    //delete detail of revision
                    .then(dataRevision => {
                      dataRevision.map(revision => {
                        db.detailrevision.destroy({
                          where: {
                            IdRevision: revision.dataValues.Id
                          }
                        })
                          .then(effectedRows => {
                            console.log('Effected rows of Detail Revision: ' + effectedRows);
                          })
                          .catch(err => {
                            reject(err);
                          })
                      })
                    })
                    //delete revision
                    .then(() => {
                      db.revision.destroy({
                        where: {
                          IdOutcomeStandard: request.Id
                        }
                      })
                        .then(effectedRows => {
                          console.log('Effected rows of Revision: ' + effectedRows);
                        })
                        .catch(err => {
                          reject(err);
                        })
                    })
                    //delete outcome
                    .then(() => {
                      db.outcomestandard.destroy({
                        where: {
                          Id: request.Id
                        }
                      })
                        .then(effectedRows => {
                          console.log('Effected rows of Outcome: ' + effectedRows);
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
            else {
              let code = -2;
              resolve(code);
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

exports.renameOutcomeStandard = (request) => {
  return new Promise((resolve, reject) => {
    db.sequelize.authenticate()
      .then(() => {
        db.outcomestandard.findById(request.Id)
          .then(data => {
            if (data) {
              db.outcomestandard.update({
                NameOutcomeStandard: request.NameOutcomeStandard
              },{
                where:{
                  Id: request.Id
                }
              })
                .then(effectedRows => {
                  console.log('Effected rows of Outcome: ' + effectedRows);
                  let code = 1;
                  resolve(code);
                })
                .catch(err => {
                  reject(err);
                })
            } else {
              let code = -2;
              resolve(code);
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