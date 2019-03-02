const db = require("../db");

exports.loadAll = () => {
    const sql = 'select * from outcome_standard';
    return db.load(sql);
}