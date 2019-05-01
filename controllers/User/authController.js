const jwt = require('jsonwebtoken');
const user = require('../../service/User/userService');
const bcrypt = require('bcrypt');
const config = require('../../config/config');
exports.isAuthenticated = (req, res, next) => {
    let response = {};
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'JWT') {
        var jwtToken = req.headers.authorization.split(' ')[1];
        jwt.verify(jwtToken, config.jwtSecret, (err, payload) => {
            if (err) {
                response.code = -1;
                response.message = "Unauthorized user!";
                res.send(JSON.stringify(response));
            } else {
                console.log("decoder: " + payload.username);
                user.getUserByUsername(payload.username)
                    .then(data => {
                        console.log("username: " + data);
                        req.user = data;
                        next();
                    })
                    .catch(err => {
                        throw err;
                    })
            }
        })
    } else {
        response.code = -1;
        response.message = "Unauthorized user!";
        res.send(JSON.stringify(response));
    }

}

