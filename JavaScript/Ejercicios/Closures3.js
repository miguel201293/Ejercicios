/* Enunciado: 
Escribe un nuevo closure: crea una función llamada multiplyByTwoque tome un parámetro.
Dentro de la multiplyByTwofunción,
cree una función llamada inner.
Esta función se encargará de multiplicar el parámetro pasado como entrada
y multiplicarlo por la variable denominada number Imprimir en la consola la salida
de la función.
Ejemplo: multiplyByTwo(4)(), resultado:8
*/
function multiplyByTwo(number) {
    this.number = 2
    function inner(){
        return number * this.number;
    }
    return inner;
}

console.log(multiplyByTwo(4)())