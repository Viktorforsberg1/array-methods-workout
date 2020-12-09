//every
//
//Metoden undersöker om alla element i en array, uppfyller kraven, som medföljande funktion förser.
//Den returnerar sedan True eller False beroende på utfallet.

const numbers = ['8', '13', '7', '12', '19']

const above = (number) => number < 20;

console.log(numbers.every(above)); //True