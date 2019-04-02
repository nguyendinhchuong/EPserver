module.exports = (sequelize, Sequelize) => {
    const level = sequelize.define('level', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        LevelName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        DateCreated:{
            type: Sequelize.DATE,
            allowNull: false
        },
        DateEdited:{
            type: Sequelize.DATE,
            allowNull: false
        }
    },{
        freezeTableName: true,
        timestamps: false
    })
    return level;
}