//npm install slugify

const slugify = require('slugify');

let text = "hasan kadir demircan, node js notes";
let updatedText = slugify(text, '*');

console.log(updatedText);