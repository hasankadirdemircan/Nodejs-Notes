/*
fs.appendFile() -> dosya yoksa oluşturup yazar. dosya varsa ekleme yapar.
fs.writeFile()-> üzerine yazar.
*/
const fs = require('fs');

fs.writeFile('demo.txt','hello world', (error)=>{
    if(error)
        throw error;
    console.log('ekleme başarılı.');
});
