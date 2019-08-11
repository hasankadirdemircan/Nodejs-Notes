/*
const arr = ['foo', 'bar', 'xyz'];
console.log(...arr); // tum elemanları ekrana yazdırabiliriz.
*/

/*
const arr = [1,2,3];

const arr2 = [...arr,4,5,6];

const arr3 = [arr,4,5,6];

console.log(arr2); //output: [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3); //output: [ [ 1, 2, 3 ], 4, 5, 6 ]

*/

const arr = ['a','b','c','d'];
const [deger1, deger2, ...rest] = arr; 
//ilk 2 deger1 ve deger2'ye geldi.
//diger elemanlar rest degiskeninde saklaniyor.

console.log(rest);