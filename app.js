const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const routesOutcomes = require('./routes/outcomeStandardRoute');
const routesPrograms = require('./routes/programRoute');
const routesFaculties = require('./routes/facultyRoute');
const routesListOutcome = require('./routes/listOutcomeStandardRoute');
const routesProgramFaculty = require('./routes/programFacultyRoute');


routesPrograms(app);
routesFaculties(app);
routesOutcomes(app);
routesListOutcome(app);
routesProgramFaculty(app);

app.listen(3001,() => {
    console.log('Node server running @ http://localhost:3001')
});