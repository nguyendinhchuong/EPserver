const db = require('../db');
const nameTable = require('../config/nameTable');

exports.getlistOfOutcomeStandard = (idOutcome) =>{
    const sql = `select * from ${nameTable.ListOutcomeStandard} where Id = ${idOutcome}`;  
    return db.load(sql);
}

exports.insertlistOfOutcomeStandards = (data) =>{
    const length = data.length; 
    let sql = `delete from ${nameTable.ListOutcomeStandard} where IdOutCome = ${length > 0 ? data[0].idOutcome : null}; `;

    
    return db.save(sql);
}