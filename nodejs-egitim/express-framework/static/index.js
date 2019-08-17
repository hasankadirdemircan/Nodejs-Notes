const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.render('index.pug');
});

app.listen((1234), () => {
    console.log('App listening on port 3002!');
});
