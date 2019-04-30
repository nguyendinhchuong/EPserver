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