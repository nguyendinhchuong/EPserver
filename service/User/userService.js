const db = require('../../models/index');
const bscrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');


exports.getList = () => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.user.findAll()
                    .then(data => {
                        resolve(data);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}
exports.register = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.user.create(request)
                    .then(() => {
                        let code = 1;
                        resolve(code);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}
// exports.comparePassword = (password) => {
//     return bscrypt.compareSync(password, this.hash_password);
// }
var comparePassword = (password, db_password) => {
    return bscrypt.compareSync(password, this.hash_password);
}
exports.login = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.user.findOne({
                    where: {
                        Username: request.Username
                    }
                })
                    .then(data => {
                        if (!data) {
                            let response = {};
                            response.code = -3;
                            resolve(response);
                        } else if (data && request.Password.localeCompare(data.dataValues.Password) === 0) {
                            let payload = { username: data.Username };
                            let jwtToken = jwt.sign(payload, config.jwtSecret, { expiresIn: 1 * 300000 });
                            let response = {};
                            response.access_token = jwtToken;
                            response.code = 1;
                            resolve(response);
                        } else {
                            let response = {};
                            response.code = -1;
                            resolve(response);
                        }
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.getUserByUsername = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.user.findOne({
                    where: {
                        Username: request.Username
                    }
                })
                    .then(data => {
                        resolve(data);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}