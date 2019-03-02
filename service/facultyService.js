const db = require('../db');
const nameTable = require('./nameModel');

exports.getFaculties = () =>{
    const sql = `select * from ${nameTable.Faculty}`;  
    return db.load(sql);
}