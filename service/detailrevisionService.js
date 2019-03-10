const db = require('../models/index');


exports.getDetailRevision = (data) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                // let sql = `SELECT dos.KeyRow, dos.NameRow
                // FROM cdio.detailoutcomestandard AS dos, cdio.outcomestandard as os
                // WHERE dos.IdOutcomeStandard=`+ data.IdOutcomeStandard;
                // db.sequelize.query(sql,{ type: db.Sequelize.QueryTypes.SELECT})
                db.e.findAll({
                    attributes:['KeyRow', 'NameRow'],
                    where:{
                        IdOutcomeStandard:data.IdOutcomeStandard
                    }
                })
                    .then(info => {
                        if (info) {
                            info.code = 1;
                            info.message = "success";
                            resolve(info);
                        } else {
                            info.code = -1;
                            info.message = "fail";
                            resolve(info);
                        }
                    })
                    .catch(err => {
                        reject(err);
                    })
            });
    })

}