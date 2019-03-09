module.exports = (sequelize, Sequelize) => {
    const DetailOutcomeStandard = sequelize.define('detailoutcomestandard', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        IdOutcomeStandard: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        KeyRow: {
            type: Sequelize.STRING,
            allowNull: false
        },
        NameRow: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return DetailOutcomeStandard;
}