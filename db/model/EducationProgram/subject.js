module.exports = (sequelize, Sequelize) => {
    const subject = sequelize.define('subject', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        SubjectCode: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        SubjectName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        SubjectEngName: {
            type: Sequelize.STRING
        },
        Credit:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        TheoryPeriod:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        PracticePeriod:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ExercisePeriod:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        DateCreated:{
            type: Sequelize.DATE,
            allowNull: false
        },
        DateUpdated:{
            type: Sequelize.DATE,
            allowNull: false
        }
    },{
        freezeTableName: true,
        timestamps: false
    })
    return subject;
}