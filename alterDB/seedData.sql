/* run  before run nodejs replace 'user of you' and 'password of you' */
alter user 'user'@'localhost' identified with mysql_native_password by 'password';

/* insert program */
insert into  cdio.program(NameProgram) values('Chính Quy');
insert into  cdio.program(NameProgram) values('Chất Lượng Cao');
insert into  cdio.program(NameProgram) values('Tiên Tiến');
insert into  cdio.program(NameProgram) values('Cao Đẳng');
insert into  cdio.program(NameProgram) values('Việt Pháp');


/* insert  faculty*/
insert into  cdio.faculty(NameFaculty) values('Công nghệ thông tin');
insert into  cdio.faculty(NameFaculty) values('Vật lý');
insert into  cdio.faculty(NameFaculty) values('Hóa học');
insert into  cdio.faculty(NameFaculty) values('Công nghệ sinh học');
insert into  cdio.faculty(NameFaculty) values('Toán học');

select * from cdio.faculty;

/* insert Program faculty */

insert into  cdio.programfaculty(IdProgram,IdFaculty,DateCareated,DateEdited) values(1,1,'2019/3/2','2019/3/2');
insert into  cdio.programfaculty(IdProgram,IdFaculty,DateCareated,DateEdited) values(1,2,'2019/3/2','2019/3/2');
insert into  cdio.programfaculty(IdProgram,IdFaculty,DateCareated,DateEdited) values(1,3,'2019/3/2','2019/3/2');
insert into  cdio.programfaculty(IdProgram,IdFaculty,DateCareated,DateEdited) values(1,4,'2019/3/2','2019/3/2');
insert into  cdio.programfaculty(IdProgram,IdFaculty,DateCareated,DateEdited) values(1,5,'2019/3/2','2019/3/2');


select * from cdio.programfaculty;

/* insert outcome standard */
insert into cdio.outcomestandard(IdProgramFaculty) values(1);
insert into cdio.outcomestandard(IdProgramFaculty) values(2);
insert into cdio.outcomestandard(IdProgramFaculty) values(3);
insert into cdio.outcomestandard(IdProgramFaculty) values(4);
insert into cdio.outcomestandard(IdProgramFaculty) values(5);

select * from cdio.outcomestandard;



select f.Id as 'IdFaculty', p.Id as 'IdProgram', o.Id as 'IdOutcome' , f.NameFaculty 'NameFaculty' ,  p.NameProgram 'NameProgram'
,f.NameFaculty, p.NameProgram, pf.DateCareated, pf.DateEdited 
from cdio.programfaculty as pf 
left join cdio.faculty  as f on pf.IdFaculty = f.Id
left join cdio.program as p on pf.IdProgram = p.Id
right join cdio.outcomestandard as o on o.Id = pf.Id
