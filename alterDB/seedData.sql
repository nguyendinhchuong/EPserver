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


/* insert list item of outcomeStandard */
insert into cdio.listoutcomestandard
	(IdOutCome, KeyOutComeStandard, NameOutComeStandard)
	VALUES 
    (1,'1---', 'KIẾN THỨC VÀ LẬP LUẬN KỸ THUẬT'),
    (1,'1-1--','Kiến thức nền tảng về Khoa học'),
    (1,'1-1-1-','Khối kiến thức về Toán'),
    (1,'1-1-1-1', 'Kiến thức về Giải tích'),
	(1,'1-1-1-2', 'Kiến thức Đại số'),
	(1,'1-1-1-3', 'Kiến thức về Toán rời rạc'),
	(1,'1-1-1-4', 'Kiến thức về Xác suất thống kê'),
	(1,'1-1-2-', 'Khối kiến thức về Vật lý'),
	(1,'1-1-2-1', 'Kiến thức Vật lý đại cương'),
	(1,'1-1-2-2', 'Kiến thức thực hành vật lý'),
	(1,'1-1-3', 'Khối kiến thức về điện - điện tử'),
	(1,'1-1-3-1', 'Kiến thức về mạch số'),
	(1,'1-1-3-2', 'Kiến thức căn bản về Điện - Điện tử'),
	(1,'1-2--', 'Kiến thức nền tảng của lĩnh vực CNTT'),
	(1,'1-2-1-', 'Khối kiến thức về lập trình '),
	(1,'1-2-1-1', 'Kiến thức cơ bản về lập trình (nhập môn)'),
	(1,'1-2-1-2', 'Các kỹ thuật lập trình'),
	(1,'1-2-1-3', 'Kiến thức về lập trình hướng đối tượng'),
	(1,'1-2-1-4', 'Kiến thức lập trình hệ thống (hợp ngữ…)');




select * from cdio.outcomestandard;



select f.Id as 'IdFaculty', p.Id as 'IdProgram', o.Id as 'IdOutcome' , f.NameFaculty 'NameFaculty' ,  p.NameProgram 'NameProgram'
,f.NameFaculty, p.NameProgram, pf.DateCareated, pf.DateEdited 
from cdio.programfaculty as pf 
left join cdio.faculty  as f on pf.IdFaculty = f.Id
left join cdio.program as p on pf.IdProgram = p.Id
right join cdio.outcomestandard as o on o.Id = pf.Id
