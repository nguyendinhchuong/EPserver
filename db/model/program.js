var db = require('../../models/index');

module.exports = (sequelize, Sequelize)=>{
    const program = sequelize.define('program', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        NameProgram: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return program;
}




// exports.getProgram = () => {
//     return new Promise((resolve, reject) => {
//         db.sequelize.authenticate()
//             .then(() => {
//                 db.sequelize.query("select * from program",{model: program})
//                     .then(program => { 
//                         resolve(JSON.stringify(program)) 
//                     })
//             })
//             .catch(err=>{
//                 reject(err);
//             })
//     })
// }