const mysql = require('mysql');
const dbConfig = require('./config/dbConfig');

exports.load = sql => {
    return new Promise((resolve, reject) => {
        const cn = mysql.createConnection({
            host: dbConfig.host,
            port: dbConfig.port,
            user: dbConfig.user,
            password: dbConfig.password,
            database: dbConfig.database    
        });
        cn.connect();

        cn.query(sql, function (error, rows, fields) {
            if (error) {
                console.log('Err-------------');
                reject(error);
            } else {
                resolve(rows);
            }

            cn.end();
        });
    });
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        const cn = mysql.createConnection({
<<<<<<< HEAD
            host: dbConfig.host,
            port: dbConfig.port,
            user: dbConfig.user,
            password: dbConfig.password,
            database: dbConfig.database  
=======
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'cdio'
>>>>>>> 80fe81301e9e94f08cfb2799ef98af3a840f2d6b
        });

        cn.connect();

        cn.query(sql, function (error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}