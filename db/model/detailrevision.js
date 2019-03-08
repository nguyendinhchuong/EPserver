var db = require('../../models/index');

const detailrevision = db.sequelize.define('detailrevision',{
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    IdRevision:{
        type: db.Sequelize.INTEGER,
        allowNull:false
    },
    KeyRow:{
        type: db.Sequelize.STRING,
        allowNull:false
    },
    NameRow:{
        type: db.Sequelize.STRING,
        allowNull:false
    }
})