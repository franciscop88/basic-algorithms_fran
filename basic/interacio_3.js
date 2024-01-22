// declarar tres variables y mostrarlas en consola
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log("Nuevo valor de age:", character.age);


//Imprimir la suma de precios de ambos juguetes
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const sumaPrecios = toy1.price + toy2.price;
console.log('La suma de los precios de los juguetes es:', sumaPrecios);

//Actualizar valores de variables y propiedades de objetos

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000; // Actualizar el valor de la variable globalBasePrice

car1.finalPrice = car1.basePrice + globalBasePrice; // Actualizar la propiedad finalPrice de car1
car2.finalPrice = car2.basePrice + globalBasePrice; // Actualizar la propiedad finalPrice de car2

console.log('Nuevo precio final del coche 1:', car1.finalPrice);
console.log('Nuevo precio final del coche 2:', car2.finalPrice);

