const db = require('../models/index');


exports.getFaculty = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.sequelize.query("select * from faculty", { model: db.faculty })
                    .then(faculty => {
                        resolve(faculty)
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}
exports.getFacultyInfo = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.faculty.findAll()
                    .then(info=>{
                        resolve(info);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}