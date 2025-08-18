// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let acumulador = 0;
for (i = 1; i <= 100; i++) {
  acumulador += i;
}
console.log("el resultado de todos los numeros es", acumulador);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let resultado = 0;
for (i = 1; i <= 25; i++) {
  resultado = i + i;
  console.log(resultado);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myArray = ["cristian", " jesus", " lewin", "esteban", " kevin", "paola"];

for (value of myArray) {
  console.log("el nombre es", value);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = "hola mundo como estas?";
const vocales = "aeiouAEIOU";

let contador = 0;
for (let i = 0; i < myString.length; i++) {
  contador += vocales.includes(myString[i]);
}

console.log("Número de vocales:", contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 1, 3, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8, 9, 52];
let producto = 1;
for (i = 0; i < numeros.length; i++) {
  producto *= numeros[i];
}
console.log("el producto es", producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let muntiplicador = 5;
producto = "";
for (i = 1; i <= 10; i++) {
  producto = i * muntiplicador;
  console.log(`${i} * ${muntiplicador} = ${producto}`);
}

// 8. Usa un bucle para invertir una cadena de texto

for (i = myString.length; i >= 0; i--) {
  let invertir = myString[i];
  console.log(invertir);
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0,
  b = 1,
  temp;

for (let i = 0; i < 10; i++) {
  console.log(a);
  temp = a + b;
  a = b;
  b = temp;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
// Array inicial

const numero = [1, 3, 53, 52, 51, 16, 6, 7, 18, 28, 38, 48, 9, 52, 12, 32];

const mayores = [];

for (let i = 0; i < numero.length; i++) {
  if (numero[i] > 10) {
    mayores.push(numero[i]);
  }
}

console.log(mayores); // [53, 52, 51, 16, 18, 28, 38, 48, 52, 12, 32]



