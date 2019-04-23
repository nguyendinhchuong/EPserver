const db = require('../../models/index');

exports.getEduContentByEduId = (request)=>{
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.eduprogcontent.findAll({
                    where:{
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
exports.addEduContent = (request)=>{
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                
            })
            .catch(err => {
                reject(err);
            })
    })
}