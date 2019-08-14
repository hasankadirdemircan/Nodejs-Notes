let fs = require('fs');
let http = require('http');
let server = http.createServer();

server.on('request', (req, res)=>{
    //normal data okuma.

    /*fs.readFile('file.txt', (err,data)=>{
        if(err)
            throw err;
        res.end(data);
    })*/

    //stream ile okuma.
    let readStream = fs.createReadStream('file.txt');
    readStream.pipe(res);//response nesnesine yaziyoruz.
    //her gelen data stream edildiği için belleği doldurma gibi bir sorunu olmuyor.
    //memory'de datayı bekletmiş olmuyoruz.
});

server.listen(3000);
