const db = require('../db');
const nameTable = require('../config/nameTable');

exports.getFaculties = () =>{
    const sql = `select * from ${nameTable.Faculty}`;  
    return db.load(sql);
}