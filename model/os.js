'user strict';
var db = require("../db");

exports.loadAll = () => {
    var sql = 'select * from outcome_standard';
    return db.load(sql);
}