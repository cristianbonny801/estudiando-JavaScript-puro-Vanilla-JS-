// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "cristian";

if (nombre == "cristian") {
  console.log(`Tu nombre es ${nombre}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
const userName = "cristian juvinao";
const password = 1234;

if (userName === "cristian juvinao" && password === 1234) {
  console.log("Acceso correcto");
} else {
  console.log("Usuario o contraseña incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -3;
if (numero < 0) {
  console.log("es negativo");
} else if (numero > 0) {
  console.log("es positivo ");
} else {
  console.log("tu numero es neutro");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17;

if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log(`No puedes votar, te faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

edad = 19;
console.log(edad >= 18 ? "eres mayor de edad" : "no eres mayor de edad");
// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable “mes”
let mes = "Enero";

if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
  console.log("Estás en Invierno");
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
  console.log("Estás en Primavera");
} else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
  console.log("Estás en Otoño");
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
  console.log("Estás en Verano");
} else {
  console.log("Mes no válido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias = "";

switch (mes) {
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    dias = "31";
    break;

  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    dias = "30";
    break;

  case "Febrero":
    dias = "28 o 29";
    break;

  default:
    dias = "Mes no válido";
}
console.log(`Los días de ${mes} son ${dias}`);

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Japonés";

if( idioma === "Japonés"){
    console.log(" こんにちは (Konnichiwa)");
}else if( idioma === "Frances"){
    console.log("Bonjour");
} else if( idioma === "Español"){
    console.log("hola");
}else {
    console.log('ni idea de lo que hablas');
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

let estacion = "";

switch (mes) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    estacion = "Invierno";
    break;

  case "Marzo":
  case "Abril":
  case "Mayo":
    estacion = "Primavera";
    break;

  case "Junio":
  case "Julio":
  case "Agosto":
    estacion = "Verano";
    break;

  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    estacion = "Otoño";
    break;

  default:
    estacion = "Mes no válido";
}

console.log(`Estamos en ${estacion}`);
// 10. Usa un switch para hacer de nuevo el ejercicio 7
let saludo = "";
switch (idioma) {
  case "Frances":
    saludo = "Bonjour";
    break;

  case "Español":
    saludo = "hola";
    break;
  case "Inglés":
    saludo = "hi";
    break;
  case "Alemán":
    saludo = "hallo/Guten Tag";
    break;
  case "Japonés":
    saludo = " こんにちは (Konnichiwa)";
    break;
  default:
    saludo = "idioma no registrado";
}
console.log(`un ${idioma} te dice ${saludo}`);
