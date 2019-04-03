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
                        console.log(data);
                    })
                    .catch(err=>{
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}