const db = require('../db');
const nameTable = require('./nameModel');

exports.getPrograms = () =>{
    const sql = `select * from ${nameTable.Program}`;  
    return db.load(sql);
}