/*Enunciado
La función de suma tiene una gran cantidad de parámetros. ¿Cómo podemos mejorar
el código para que acepte cualquier cantidad de números para sumar como argumento?
function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}*/
function sum(...nums) {
    return nums.reduce((acumulador,numero)=> acumulador + numero,0);
}

console.log(sum(1, 2, 3, 4, 5));