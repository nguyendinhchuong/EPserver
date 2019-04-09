const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json({ type: 'application/json' }));

//Outcome Standard Route
const routesPrograms = require('./routes/OutcomeStandard/programRoute');
const routesFaculties = require('./routes/OutcomeStandard/facultyRoute');
const routesOutcomes = require('./routes/OutcomeStandard/outcomeStandardRoute');
const routesDetailOutcomes = require('./routes/OutcomeStandard/detailOutcomeStandardRoute');
const routesRevisions = require('./routes/OutcomeStandard/revisionRoute');
const routesDetailRevisions = require('./routes/OutcomeStandard/detailRevisionRoute');

//Education Program Route
const routesSubject = require('./routes/EducationProgram/subjectRoute');
const routeEduProg = require('./routes/EducationProgram/eduprogramRoute');
const routeLevel = require('./routes/EducationProgram/levelRoute');
const routeMajor = require('./routes/EducationProgram/majorRoute');
const routeDetailEduProg = require('./routes/EducationProgram/detaileduprogRoute');
const routeEduPurpose = require('./routes/EducationProgram/edupurposeRoute');
const routeSubjectEduProg = require('./routes/EducationProgram/subjecteduprogRoute');

routesPrograms(app);
routesFaculties(app);
routesOutcomes(app);
routesDetailOutcomes(app);
routesRevisions(app);
routesDetailRevisions(app);

routesSubject(app);
routeEduProg(app);
routeLevel(app);
routeMajor(app);
routeDetailEduProg(app);
routeEduPurpose(app);
routeSubjectEduProg(app);

app.listen(3001, () => {
    console.log('Node server running @ http://localhost:3001')
});