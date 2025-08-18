// 1. Crea una variable para cada operación aritmética

let suma = 1 + 1;
let resta = 1 - 1;
let multiplicacion = 1 * 1;
let division = 1 / 1;
let modulo = 1 % 10;
let exponenciacion = 1 ** 1;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
console.log(exponenciacion);
console.log("aqui llegas");
// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 8;
resta -= 5;
multiplicacion *= 54;
division /= 1;
modulo %= 1;
exponenciacion **= 1200;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
console.log(exponenciacion);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let menorQue = 4 < 5;
let mayorQue = 4 > 3;
let menorIgual = 2 <= 3;
let mayorIgual = 45 >= 3;
let igualIgual = 2 == 2;
let tripleIgual = 34 === 34;

console.log(menorQue);
console.log(mayorQue);
console.log(menorIgual);
console.log(mayorIgual);
console.log(igualIgual);
console.log(tripleIgual);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
menorQue = 7 < 5;
mayorQue = 2 > 3;
menorIgual = 6 <= 3;
mayorIgual = 1 >= 3;
igualIgual = 3 == 2;
tripleIgual = 34 === "34";

console.log(menorQue);
console.log(mayorQue);
console.log(menorIgual);
console.log(mayorIgual);
console.log(igualIgual);
console.log(tripleIgual);
console.log("hasta aqui");
// 5. Utiliza el operador lógico and

let logicoAnd = 23 < 32 && 45 > 9; // true
let logicoAnd2 = 23 < 32 && 45 > 99; // false

console.log(logicoAnd, logicoAnd2);

// 6. Utiliza el operador lógico or

let logicoOr = 23 < 32 || 45 > 9; // true
let logicoOr2 = 23 < 32 || 45 > 99; // true

console.log(logicoOr, logicoOr2);

// 7. Combina ambos operadores lógicos

console.log((23 < 40 && 40 > 30) || 80 < 30);

// 8. Añade alguna negación

console.log(!4 < 3);
console.log(!(23 < 40 && 40 > 30) || 80 < 30);

// 9. Utiliza el operador ternario
let ternario = true;
ternario ? "estas vivo?" : "estas muerto?";
console.log(ternario);

// 10. Combina operadores aritméticos, de comparación y lógicos

result = suma + resta;
console.log((result <= result && result > resta) || suma === suma);
