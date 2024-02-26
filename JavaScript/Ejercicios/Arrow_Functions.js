/* Enunciado:
Convierta las funciones de las variables en funciones de flecha
y combine las funciones para que el resultado de la siguiente operación matemática
se imprima en la consola:((2 + 4) * (5 + 2) - 2) / 5

const sum = function (a, b) {
    return a + b;
  }
  
  const subtract = function (a, b) {
    return a - b;
  }
  
  const multiply = function (a, b) {
    return a * b;
  }
  
  const divide = function (a, b) {
    return a / b;
  }
  
  const log = function (value) {
    console.log(value);
  }
  */

// Función suma flecha.
const sum = (a,b) =>a + b;
// Función resta flecha.
const subtract = (a, b) => a - b;
// Función multiplicacion flecha.
const multiply = (a, b) => a * b;
// Función division flecha.
const divide = (a, b) => a / b;
//Funcion operacion matematica.((2 + 4) * (5 + 2) - 2) / 5
const operacion = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
//Mostrar resultado. 
console.log(operacion)