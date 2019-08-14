let fs = require('fs');
let file = 'video.mp4';
//event emitter.
let readStream = fs.createReadStream(file);
let writeStream = fs.createWriteStream('new.mp4');
let progress = 0;

//dosya boyutunu öğrenmek için.
fs.stat(file, (err, data)=>{
    let = total = data.size;
    console.log(total);

    //her data geldiğinde.
    readStream.on('data', (chunk)=>{
        progress += chunk.length;
        console.log(Math.round((100 * progress)/total) + '%');
    });

    //readStream'den her veri okunduğunda writeStream'e yazılacak.
    readStream.pipe(writeStream);
    writeStream.on('finish', ()=>{
        console.log('yeni dosya oluşturuldu.');
    });
});

