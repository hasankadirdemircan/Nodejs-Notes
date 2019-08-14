let fs = require('fs');
let file = 'video.mp4';
//event emitter.
let readStream = fs.createReadStream(file);
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

    //bittiğini anlamak için.
    readStream.on('end', ()=>{
        console.log('veri okunması bitti.');
        console.log(progress);
    });
});

