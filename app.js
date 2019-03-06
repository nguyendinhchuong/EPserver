const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json({ type: 'application/json' }));



const routesOutcomes = require('./routes/outcomeStandardRoute');
const routesPrograms = require('./routes/programRoute');
const routesFaculties = require('./routes/facultyRoute');
const routesListOutcome = require('./routes/listOutcomeStandardRoute');
const routesProgramFaculty = require('./routes/programFacultyRoute');



// routesPrograms(app);
// routesFaculties(app);
routesOutcomes(app);
// routesProgramFaculty(app);
// routesListOutcome(app);

app.listen(3001, () => {
    console.log('Node server running @ http://localhost:3001')
});