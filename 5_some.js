//some
//
//Metoden some undersöker om något element i arrayen, stämmer 
//överens med försedd funktion, och returnerar sedan True eller False.

const countries = ['Togo', 'Belize', 'Peru', 'Luxembourg', 'Pakistan']

function isThere(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });

}

console.log(isThere(countries, 'Peru')); //True
console.log(isThere(countries, 'Sweden')); //False