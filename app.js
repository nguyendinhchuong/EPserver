const express = require('express');
const app = express();



const routesOutcomes = require('./routes/outcomeStandardRoute');
const routesPrograms = require('./routes/programRoute');
const routesProgramFaculties = require('./routes/programFacultyRoute');
const routesFaculties = require('./routes/facultyRoute');

routesOutcomes(app);
routesPrograms(app);
routesProgramFaculties(app);
routesFaculties(app);

app.listen(3000,() => {
    console.log('Node server running @ http://localhost:3000')
});