const db = require('../db');
const table = require('../config/nameTable');

exports.getFaculties = () =>{
    const sql = `
    select f.Id as 'IdFaculty', p.Id as 'IdProgram', o.Id as 'IdOutcome' , o.NameOutcome 'NameOutcomeStandard',
    f.NameFaculty 'NameFaculty' ,  p.NameProgram 'NameProgram', pf.DateCareated, pf.DateEdited   
    from ${table.ProgramFaculty} as pf 
    left join ${table.Faculty}  as f on pf.IdFaculty = f.Id
    left join ${table.Program} as p on pf.IdProgram = p.Id
    right join ${table.OutcomeStandard} as o on o.Id = pf.Id
    `;  
    return db.load(sql);
}