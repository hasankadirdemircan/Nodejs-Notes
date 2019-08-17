//npm install express --save
//npm install pug --save

const express = require('express');
const app = express();

app.set('view engine', 'pug');
//anasayfaya girdiginde.
app.get('/', (req, res)=>{
    res.render('index.pug', {name:'kadir', surname:'demircan'} );
});

app.listen((1234), () => {
    console.log('App listening on port 3002!');
});
