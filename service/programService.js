const db = require('../db');
const nameTable = require('../config/nameTable');

exports.getPrograms = () =>{
    const sql = `select * from ${nameTable.Program}`;  
    return db.load(sql);
}