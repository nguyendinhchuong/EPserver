const user = require('../../controllers/User/userController');
const auth = require('../../controllers/User/authController');
module.exports = (app) => {
    app.route('/user/getlist').get(auth.isAuthenticated, user.getList);
    // app.route('/user/getInfo').get(user.getInfo);

    app.route('/user/register').post(user.register);
    app.route('/user/login').post(user.login);
    // app.route('/user/delete').post(user.delete);
}