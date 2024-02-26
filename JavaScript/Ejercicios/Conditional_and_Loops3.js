/*Enunciado:
Cree una función sumUntilque tome un parámetro y devuelva la suma de todos los números
que van desde uno hasta el valor pasado como parámetro.
function sumUntil(maxValue) {
// ...
}

console.log(sumUntil(5)); // OUTPUT: 15*/ 

function sumUntil(maxValue) {
  let contenedor = 0
  for (i = 0; i <= maxValue; i++) {
    contenedor = contenedor + i;
  }
  return contenedor;
}
console.log(sumUntil(5)); // OUTPUT: 15.