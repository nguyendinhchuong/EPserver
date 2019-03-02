'use strict';

module.exports = (app)=>{
    var os = require('../controllers/osController');

    app.route('/os')
    .get(os.getAllOS);
}