const db = require('../db');
const nameTable = require('../config/nameTable');

exports.getlistOfOutcomeStandard = (idOutcome) =>{
    const sql = `select * from ${nameTable.ListOutcomeStandard} where Id = ${idOutcome}`;  
    return db.load(sql);
}