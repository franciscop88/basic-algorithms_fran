
//Consigue el valor "HULK" del array de avengers y muéstralo por consola
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]); // Muestra "HULK"

avengers[0] = "IRONMAN";
console.log(avengers); 

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length); // Muestra 3

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters1.push("Morty", "Summer");
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]); // Muestra "Summer"

// Elimina el último elemento del array y muestra el primero y el último por consola

let rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const ultimoPersonaje = rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0]); // Muestra "Rick"
console.log(ultimoPersonaje); // Muestra "Lapiz Lopez"



