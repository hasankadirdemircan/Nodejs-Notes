const express = require('express');
const app = express();

const user = require('./routes/user');
const profile = require('./routes/profile');

//helpers
//tüm isteklerde kullanıcı giriş kontrolü sağlar.
//let isLogin = require('./helper/isLogin');

//app.use(isLogin);
app.use('/user', user);
app.use('/profile', profile);

app.listen(3233, () => {
    console.log("express server çalıştı.");
});
