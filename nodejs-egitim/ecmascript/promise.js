/*
Eski yontem
let asenkronFonksiyon = function(sayi, callback){
    let sonuc = sayi + 2;
    callback(sonuc);
};

asenkronFonksiyon(2, function(sonuc){
    console.log(sonuc);
    asenkronFonksiyon(4,function(sonuc){
        console.log(sonuc);
        asenkronFonksiyon(6, function(sonuc){
            console.log(sonuc);
        })
    })
});

*/


//Promise ile;

let asenkronFonksiyon = (sayi) => {
    return new Promise((resolve, reject) => {
        if(sayi == 4)
            resolve('her sey yolunda')
        else
            reject('bir sorun var ');
    });
};

//reject olursa catch'e duser.
//resolve oldugunda then bloklarına duser.
asenkronFonksiyon(5)
    .then((data)=>{
        console.log(data); //output: her sey yolunda
        return 1;
    })
    .then((data)=>{
        console.log(data); //output: 1
        return 2;
    })
    .then((data)=>{
        console.log(data); // output: 2
    })
    .catch((error)=>{
        console.log(error);
    });