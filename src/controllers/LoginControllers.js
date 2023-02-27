function login(req, res){
    res.render('login/LoginIndex');
}
function register(req, res){
    res.render('register/RegisterIndex');
}

module.exports = {
    login: login,
    register: register,
}