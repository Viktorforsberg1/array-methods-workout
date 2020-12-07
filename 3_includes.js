//includes

// Metoden includes söker igenom arrayen för ett element som matchar 
//ett argument. Om en match återfinns returnerar metoded true, men om den inte 
//kan hitta något, så returneras false

const Bilmärken = ['Volvo','SAAB', 'BMW','Toyota','Seat'];

console.log(Bilmärken.includes('Volvo')); //True
console.log(Bilmärken.includes('Toyota')); //True
console.log(Bilmärken.includes('Volkswagen')); //False