module.exports = (sequelize, Sequelize) => {
    const subjectblock = sequelize.define('subjectblock', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        IdEduProgContent:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Credit:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        isOptional:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        isAccumulated:{
            type: Sequelize.BOOLEAN,
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
    return subjectblock;
}