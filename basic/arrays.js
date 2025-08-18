// 1. Crea un array que almacene cinco animales

const granja = ["pollos", "gallinas", "cerdos", "patos", "caballos"];

// 2. Añade dos más. Uno al principio y otro al final

granja.push("paloma");
granja.unshift("vacas");
console.log(granja);

// 3. Elimina el que se encuentra en tercera posición

console.log(granja.splice(2, 1));

// 4. Crea un set que almacene cinco libros
let libreria = [
  "El guardián de los sueños",
  "Sombras en la luna",
  "Viaje al corazón del tiempo",
  "El secreto de las estrellas",
  "Códigos de un destino",
];
const mySet = new Set(libreria);

// 5. Añade dos más. Uno de ellos repetido

mySet.add("La melodía del viento");
mySet.add("Códigos de un destino");

// 6. Elimina uno concreto a tu elección

mySet.delete("Sombras en la luna");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

const meses = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
  [8, "agosto"],
  [9, "septiembre"],
  [10, "octubre"],
  [11, "noviembre"],
  [12, "diciembre"],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(meses.has(5), meses.get(5));

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

meses.set("verano", ["junio", "julio", "agosto"]);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["java", "js", "c++", "python", "etc"];
let myNewSet = new Set(myArray);

let myMap = new Map([["lenguajes", myNewSet]]);

console.log(myMap);
