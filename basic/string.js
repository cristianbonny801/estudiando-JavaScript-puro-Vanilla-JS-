// 1. Concatena dos cadenas de texto

const nombre = "Cristian";
const apellido = "Juvinao";

const concatenarcion = nombre + " " + apellido;
console.log(concatenarcion);

// 2. Muestra la longitud de una cadena de texto

console.log(concatenarcion.length);

// 3. Muestra el primer y último carácter de un string

console.log(concatenarcion[0], concatenarcion[15]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let texto = `Esta es una cadena
que ocupa varias
líneas de texto.`;

// 6. Interpola el valor de una variable en un string

const interpolacion = `tu nombre es ${nombre} y tu apellido es ${apellido}`;
console.log(interpolacion);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let resultado = interpolacion.replace(/ /g, "-");

console.log(resultado);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(interpolacion.includes(`${nombre}`) );

// 9. Comprueba si dos strings son iguales

console.log(nombre === apellido);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(apellido.length===nombre.length);
