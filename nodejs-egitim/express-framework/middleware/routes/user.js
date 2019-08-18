const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let user = false; //db'den user gelmedi, varsayalım.
    if(user)
        res.send("user sayfası");
    else
        return next({status: 404, message: "bu kullanici bulunamadı."});
});

module.exports = router;
