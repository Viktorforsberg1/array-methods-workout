//map
//
//Metoden skapar en ny array, med resultaten från att alla element har 
//"gått" igenom en funktion.

const numberArray = ['2', '5', '4', '12', '9'];

const squareNumber = numberArray.map(x => x*x);

console.log(squareNumber); //[ 4, 25, 16, 144, 81 ]