var db = require('../../models/index');

const revision = db.sequelize.define('revision',{
    Id:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    IdOutcomeStandard:{
        type: db.Sequelize.INTEGER,
        allowNull:false
    },
    IdUser:{
        type: db.Sequelize.INTEGER,
        allowNull:false
    },
    NameRevision: {
        type: db.Sequelize.STRING,
        allowNull:false
    },
    updatedAt:{
        type: db.Sequelize.DATE
    }
})