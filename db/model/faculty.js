var db = require('../../models/index');

const faculty = db.sequelize.define('faculty', {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NameFaculty: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})


exports.getFaculty = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.sequelize.query("select * from faculty", { model: faculty })
                    .then(faculty => { 
                        resolve(JSON.stringify(faculty)) 
                    })
            })
            .catch(err=>{
                reject(err);
            })
    })

}