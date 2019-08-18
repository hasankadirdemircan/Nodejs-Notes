let isLogin = (req, res, next) => {
    const isLogin = false;
    if(isLogin)
        next();
    else
        res.send("lütfen giriş yapın.");

};

module.exports = isLogin;
