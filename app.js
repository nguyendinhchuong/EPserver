const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const routesOutcomes = require('./routes/outcomeStandardRoute');
const routesPrograms = require('./routes/programRoute');
const routesFaculties = require('./routes/facultyRoute');

routesOutcomes(app);
routesPrograms(app);
routesFaculties(app);

app.listen(3000,() => {
    console.log('Node server running @ http://localhost:3000')
});