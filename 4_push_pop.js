//push_pop
//
//Metoden push, lägger till ett/flera element i en array och returnerar den nya arrayen.
//
//Metoden pop tar bort det sista elementet i en array och returnerar den nya arrayen.

const fruits = ['Banana', 'Apple', 'Orange']

fruits.push('Pineapple');
console.log(fruits); //[ 'Banana', 'Apple', 'Orange', 'Pineapple' ]

console.log(fruits.pop()); //Pineapple

fruits.pop();
console.log(fruits); //[ 'Banana', 'Apple' ]