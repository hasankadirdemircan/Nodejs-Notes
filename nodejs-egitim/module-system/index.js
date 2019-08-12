//dosya dizinini belirtiyoruz.
//require keyword ile import ediyoruz.
//eski yontem

//let foo = require('./modul.js').foo; 
//let bar = require('./modul.js').bar; 

//yeni yontem.
let {foo, bar} = require('./modul');

console.log(foo());//modul.js icerisindeki foo fonksiyonunu kullanabiliyoruz.
console.log(bar());//modul.js icerisindeki foo fonksiyonunu kullanabiliyoruz.