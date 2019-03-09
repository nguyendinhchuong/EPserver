
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
          createdAt: data.createdAt,
          updatedAt: data.updatedAt
        });
        os.save(() => {
          console.log("save success")
          resolve({
            code: 1,
            message: "Save success"
          })
        });
      })
      .catch(err => {
        reject(err);
      })
  })


}