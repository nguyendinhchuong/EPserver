module.exports = (sequelize, Sequelize) => {
    const detaileduprogram = sequelize.define('detaileduprogram', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        IdEduProgram:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        EnrollmentTarget: {
            type: Sequelize.STRING,
            allowNull: false
        },
        DateCreated:{
            type: Sequelize.DATE,
            allowNull:false
        }        
    },{
        freezeTableName: true,
        timestamps: false
    })
    return detaileduprogram;
}