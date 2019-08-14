let http = require('http');

//http server oluşturma
let server = http.createServer((request, response)=>{
    console.log("request geldi.");
    console.log(request.headers);
    response.writeHead(200, {'content-type': 'text/html;charset=utf-8'}); //durumkodu, content-type  //turkce karakter icin.
    response.write("<b>hello world1</b>");
    response.end();
 //   response.end("<b>hello world</b>");
});

server.listen(3000);

//nodemon create-http-server.js
//nodemon -> server'ı aç kapa yapmadan değişiklikleri uygulamaya yaramaktadır.
