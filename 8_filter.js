//filter

//Metoden filter skapar en ny array med de elementen som godtages
//av den försedda funktionen.

const cities = ['Lima', 'Chicago', 'Pretoria', 'Shenzhen', 'Stockholm']

const result = cities.filter(city => city.length < 8);

console.log(result); //[ 'Lima', 'Chicago' ]