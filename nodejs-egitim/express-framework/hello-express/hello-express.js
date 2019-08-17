//npm install express --save


const express = require('express');
const app = express();

//anasayfaya girdiginde.
app.get('/', (req, res)=>{
    res.send('merhaba express');
});

app.listen((3001), () => {
    console.log('App listening on port 3001!');
});
