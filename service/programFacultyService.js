const db = require('../db');
const table = require('./nameModel');

exports.getFaculties = () =>{
    const sql = `
    select f.Id, f.NameFaculty, p.NameProgram, pf.DateCareated, pf.DateEdited 
    from ${table.ProgramFaculty} as pf 
    left join ${table.Faculty}  as f on pf.IdFaculty = f.Id
    left join ${table.Program} as p on pf.IdProgram = p.Id
    `;  
    return db.load(sql);
}