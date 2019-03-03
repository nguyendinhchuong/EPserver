/*3/3/2019 */
alter table cdio.outcomestandard
	add NameOutcome nvarchar(200);

update cdio.outcomestandard
set NameOutcome = "Faculty - chính quy"
where Id < 10