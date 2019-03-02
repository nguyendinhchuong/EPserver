const express = require('express');
const app = express();

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

const routes = require('./routes/outcomeStandardRoute');

routes(app);