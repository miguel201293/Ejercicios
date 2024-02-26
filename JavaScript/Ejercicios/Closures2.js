/*Enunciado:
A partir del ejercicio anterior,
¿puedes imprimir el valor de helloName, después de 1 segundo? */
function printName() {
    let helloName = "Hello John"
    function inner(){
        setTimeout(() => {
            console.log(helloName);
        }, 1000);
    }
    return inner;
}

console.log(printName()())