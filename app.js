var express = require('express');
var app = express();



app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

var routes = require('./routes/osRoute');
routes(app);