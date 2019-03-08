var db = require('../../models/index');

const program = db.sequelize.define('program', {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NameProgram: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})


exports.getProgram = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.sequelize.query("select * from program",{model: program})
                    .then(program => { 
                        resolve(JSON.stringify(program)) 
                    })
            })
            .catch(err=>{
                reject(err);
            })
    })
}