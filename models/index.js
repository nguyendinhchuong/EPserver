'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//models/tables
db.outcomestandard = require('../db/model/OutcomeStandard/outcomestandard')(sequelize, Sequelize);
db.faculty = require('../db/model/OutcomeStandard/faculty')(sequelize, Sequelize);
db.program = require('../db/model/OutcomeStandard/program')(sequelize, Sequelize);
db.detailoutcomestandard = require('../db/model/OutcomeStandard/detailoutcomestandard')(sequelize, Sequelize);
db.revision = require('../db/model/OutcomeStandard/revision')(sequelize, Sequelize);
db.detailrevision = require('../db/model/OutcomeStandard/detailrevision')(sequelize, Sequelize);

// // //Relations
// db.outcomestandard.hasMany(db.detailoutcomestandard);
// db.faculty.hasMany(db.outcomestandard);
// db.outcomestandard.belongsTo(db.faculty);

// db.outcomestandard.hasMany(db.detailoutcomestandard);
// db.detailoutcomestandard.belongsTo(db.outcomestandard);


// db.outcomestandard.belongsTo(db.program);
// db.program.hasMany(db.outcomestandard);



module.exports = db;
