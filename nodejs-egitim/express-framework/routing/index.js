const express = require('express');
const app = express();

/**
 * get, post, put, delete, all
 *
 *  ? (zorunlu olmayan) me(hm)?et
 *  * (yerine herhangi ifade gelebilir)
 *  + (soldaki ifadenin aynısı olmalı)
 */
app.get('/users/:id', (req, res)=>{
    console.log(req.params);
    res.send(req.params);
});

app.get('/contact', (req, res)=>{
    res.send('contact page');
});

app.post('/contact', (req, res)=>{
    res.send('contact page post method');
});
/*
app.all('/contact', (req, res)=>{
    res.send('app all page method');
});
*/
app.listen((4444), () => {
    console.log('App listening on port 3002!');
});
