/*
var x = "degisken";
let y = "bu da degsiken";

console.log(x);
console.log(y);

for(var i = 0; i<10; i++){
    // var ile for disinda da i ' ye erisebilrim.
    // fakat let ile tanimlasaydim erisemezdim.
    // let in scop'u for icindedir sadece.
}

console.log(i);
*/
/* 
var x = 'foo';
var x = 'foo';

let y = 'foo';
let y = 'foo';
*/

/**
 *  Identifier 'y' has already been declared
 */

 const pi = 3;
 //pi = 3.14;
 console.log(pi);
 //TypeError: Assignment to constant variable.

 const dizi = [2,3,4,5];
 dizi.push(3);// const dizide eleman ekleyebilriiz.
 console.log(dizi);