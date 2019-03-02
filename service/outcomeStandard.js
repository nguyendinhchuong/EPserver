const db = require('../db');

exports.loadAll = () => {
    const sql = 'select * from cdio.program';
    return db.load(sql);
}