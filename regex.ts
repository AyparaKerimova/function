//Part-1

const text:string = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

const regex1 = /Spain/g;

console.log(text.match(regex1))

//Part-2

const regex2 = /rain/g;
console.log(...text.matchAll(regex2)) //Hamısını  göstərir restdən istifadə edəndə. Etməyəndə heç nə çıxmır.

//Part-3

console.log(text.replace('Spain','France')) //Sadəcə ilk olanı dəyişir

//İkincinidə dəyişmək üçün:

let word = text.split(' ')[10] 
console.log(text.replace(word,'France'))

//Part-4

console.log(text.replaceAll('rain','sun'))

//Part-5

console.log(text.search('plain'))