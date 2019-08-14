let http = require('http');
let server = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
    //durumkodu, content-type  //turkce karakter icin.
    if(request.method==="GET"){
        if(request.url=== '/')
            response.write("index sayfası");
        else if(request.url === '/iletisim')
            response.write("iletişim sayfası");
        else
            response.write("sayfa bulunamadı.");
    }
    response.end();
});

server.listen(3000);

//nodemon create-http-server.js
//nodemon -> server'ı aç kapa yapmadan değişiklikleri uygulamaya yaramaktadır.
