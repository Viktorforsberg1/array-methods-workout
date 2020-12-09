//fill

//Metoden fill, ändrar alla element i en array till samma värde.
//Den returnerar den förändrade arrayen.

const array1 = ['John', 'Max', 'William', 'Greg', 'Eric'];

array1.fill('Thomas');
console.log(array1); //[ 'Thomas', 'Thomas', 'Thomas', 'Thomas', 'Thomas' ]


const array2 = ['John', 'Max', 'William', 'Greg', 'Eric'];

console.log(array2.fill('Thomas', 2)); //[ 'John', 'Max', 'Thomas', 'Thomas', 'Thomas' ]