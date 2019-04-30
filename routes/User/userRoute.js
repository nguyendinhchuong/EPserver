const user = require('../../controllers/User/userController');

module.exports = (app) => {
    // app.route('/user/getList').get(user.getList);
    // app.route('/user/getInfo').get(user.getInfo);

    app.route('/user/register').post(user.register);
    // app.route('/user/login').post(user.login);
    // app.route('/user/delete').post(user.delete);
}