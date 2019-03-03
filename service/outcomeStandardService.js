const db = require('../db');
const nameTable = require('../config/nameTable');

exports.getOutcomeStandards = () =>{
    const sql = `
    select f.Id as 'IdFaculty', p.Id as 'IdProgram', o.Id as 'IdOutcome' , o.NameOutcome 'NameOutcomeStandard',
    f.NameFaculty 'NameFaculty' ,  p.NameProgram 'NameProgram', pf.DateCareated, pf.DateEdited   
    from ${nameTable.ProgramFaculty} as pf 
    left join ${nameTable.Faculty}  as f on pf.IdFaculty = f.Id
    left join ${nameTable.Program} as p on pf.IdProgram = p.Id
    right join ${nameTable.OutcomeStandard} as o on o.Id = pf.Id
    `;  
    return db.load(sql);
}