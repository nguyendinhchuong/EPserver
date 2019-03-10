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
                        if(data){
                            data.code = 1;
                            data.message = "success";
                            resolve(data);
                        }else{
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