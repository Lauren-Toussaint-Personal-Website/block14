


const word1 = "hello"
let counter = 0
let text1 = ""
for (let i = 0; i < word1.length; i++) {
  if (word1[i] === "a" || word1[i] === "e" || word1[i] === "i" || word1[i] === "o" || word1[i] === "u") {
    counter++;}
    
    
}

console.log(`'Hello' contains ${counter} vowels and ${word1.length-counter} consonants.`);



const word2 = "onomonopia"
let counter2 = 0
let text2=""
for (let i = 0; i < word2.length; i++) {
  if (word2[i] === "a" || word2[i] === "e" || word2[i] === "i" || word2[i] === "o" || word2[i] === "u") {
    counter2++;
    
  }
}
console.log(`'Onomonopia' contains ${counter2} vowels and ${word2.length-counter2} consonants.`);




const word3 = "textbook"
let counter3 = 0
let text3 = ""
for (let i = 0; i < word3.length; i++) {
  if (word3[i] === "a" || word3[i] === "e" || word3[i] === "i" || word3[i] === "o" || word3[i] === "u") {
    counter3++;

    
  }
}
console.log(`'Textbook' contains ${counter3} vowels and ${word3.length-counter3} consonants.`);



const word4 = "ukelele"
let counter4 = 0
let text4 = ""
for (let i = 0; i < word4.length; i++) {
  if (word4[i] === "a" || word4[i] === "e" || word4[i] === "i" || word4[i] === "o" || word4[i] === "u") {
    counter4++;

    
  }
}
console.log(`'Ukelele' contains ${counter4} vowels and ${word4.length-counter4} consonants.`);



const word5 = "awesome"
let counter5 = 0
let text5 = ""

for (let i = 0; i < word5.length; i++) {
  if (word5[i] === "a" || word5[i] === "e" || word5[i] === "i" || word5[i] === "o" || word5[i] === "u") {
    counter5++;

    
  }
}

console.log(`'Awesome' contains ${counter5} vowels and ${word5.length-counter5} consonants.`);




  
const array = [1,2,3,4,5];

{

  for (let i = 0, j = array.length - 1; i < j; i++, j--) 
    [array[i], array[j]] = [array[j], array[i]];
}

console.log(array)
