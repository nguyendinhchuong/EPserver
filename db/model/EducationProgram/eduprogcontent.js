module.exports = (sequelize, Sequelize) => {
    const eduprogramcontent = sequelize.define('eduprogramcontent', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        KeyRow:{
            type: Sequelize.STRING,
            allowNull: false
        },
        NameRow:{
            type: Sequelize.STRING,
            allowNull: false
        },        
        DateCreated:{
            type: Sequelize.DATE,
            allowNull: false
        },
    },{
        freezeTableName: true,
        timestamps: false
    })
    return eduprogramcontent;
}