const user = require('../../service/User/userService');

exports.register = (req, res) => {
    let body = JSON.parse(req.body.data);
    let request = {};
    request.Username = body.username;
    request.Password = body.password;
    request.DateCreated = body.datecreated;
    request.DateEdited = body.dateedited;
    user.register(request)
        .then(data => {
            let response = {};
            if (data === 1) {
                response.code = 1;
                response.message = "add success";
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "add fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err => {
            throw err;
        })
}

exports.login = (req, res) => {
    let body = JSON.parse(req.body.data);
    let request = {};
    request.Username = body.username;
    request.Password = body.password;

    user.login(request)
        .then(data => {
            let response = {};
            if (data.code === -3) {
                response.code = data.code;
                response.message = "user not exist";
                res.send(JSON.stringify(response));
            } else if (data.code === -1) {
                response.code = -1;
                response.message = "login fail";
                res.send(JSON.stringify(response));
            } else {
                response.code = data.code;
                response.token = data.access_token;
                response.message = "login success";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err => {
            throw err;
        })
}

exports.getList = (req, res) => {
    user.getList()
        .then(data => {
            let response = {};
            if (data) {
                response.code = 1;
                response.data = data;
                response.message = "success";
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err => {
            throw err;
        })
}