const degerler = {
    deger1: 'deger1',
    deger2: 'deger2',
    deger3: {
        isim: 'kadir'
    }
};

const{deger3:{isim}}= degerler;
console.log(isim);