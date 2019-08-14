let http = require('http');
let fs = require('fs');

//http server oluşturma
let server = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type': 'text/html;charset=utf-8'}); //durumkodu, content-type  //turkce karakter icin.
    fs.readFile('index.html', (err, data)=>{
        if(err)
            throw err;
        response.end(data);
    });
});

server.listen(3000);

//nodemon create-http-server.js
//nodemon -> server'ı aç kapa yapmadan değişiklikleri uygulamaya yaramaktadır.
