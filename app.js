const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json({ type: 'application/json' }));


const routesPrograms = require('./routes/programRoute');
const routesFaculties = require('./routes/facultyRoute');
const routesOutcomes = require('./routes/outcomeStandardRoute');
const routesDetailOutcomes = require('./routes/detailOutcomeStandardRoute');
const routesRevisions = require('./routes/revisionRoute');
// const routesDetailRevisions = require('./routes/detailRevisionRoute');


routesPrograms(app);
routesFaculties(app);
routesOutcomes(app);
routesDetailOutcomes(app);
routesRevisions(app);
// routesDetailRevisions(app);

app.listen(3001, () => {
    console.log('Node server running @ http://localhost:3001')
});