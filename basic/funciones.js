// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.
const myFuncion = (a, b) => {
  return a + b;
};
console.log(myFuncion(1, 7));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

function detector(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}

console.log(detector([11, 2, 2, 3, 4]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

const numVocales = (param) => {
  const vocales = "aeiouAEIOU";
  let numV = 0;
  for (i = 0; i < param.length; i++) {
    numV += vocales.includes(param[i]);
  }
  return numV;
};
console.log(numVocales("hola como estas "));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.
const tuyu = ["hola"];
tuyu.t;
function mayus(array) {
  let myNewArray = [];
  for (i = 0; i < array.length; i++) {
    myNewArray.push(array[i].toUpperCase());
  }
  return myNewArray;
}
console.log(mayus(["pollo", "gallina", "cerdo"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

// no lo hice yo

// 5. Función que verifica si un número es primo
const esPrimo = (num) => {
  if (num <= 1) return false; // 0, 1 y negativos no son primos

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // si encontramos un divisor, no es primo
    }
  }
  return true; // si no se encontró divisor → es primo
};

console.log(esPrimo(3)); // true
console.log(esPrimo(4)); // false
console.log(esPrimo(17)); // true

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

const combinarArrays = (primerarray, segundarray) => {
  let union = [];
  for (i = 0; i < segundarray.length; i++) {
    if (primerarray.includes(segundarray[i])) {
      union.push(segundarray[i]);
    }
  }
  return union;
};
console.log(
  combinarArrays([4, "hola como", 2, 1], ["hola", "como estas", 2, 3, 1, 4])
);
console.log("hasta aqui llegaste perro");
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

const sumaPar = (array) => {
  let contador = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      contador += array[i];
    }
  }

  return contador;
};

console.log(sumaPar([1, 2, 4, 8]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

function elevacion(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i] ** 2);
  }
  return newArray;
}
console.log(elevacion([1, 2, 3, 4, 5, 54, 7]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

const invertir = (string) => {
  let invertida = "";
  for (i = string.length; i >= 0; i--) {
    invertida += string[i];
  }
  return invertida;
};
console.log(invertir("hola como estas "));

// 10. Crea una función que calcule el factorial de un número dado

const factorizar = (num) => {
  let factorial = 1; 
  
  for (let i = 1; i <= num; i++) {
    factorial *= i; // factorial = factorial * i
  }
  
  return factorial;
};

console.log(factorizar(5)); 
