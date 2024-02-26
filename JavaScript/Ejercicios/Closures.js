/* Enunciado
Intenta escribir tu primero closure. Escribe una función llamada printName 
y declara dentro de ella una variable llamada helloName,
el valor de esta variable será: "Hello John".
También declare una función nombrada inner y devuelva la helloNamevariable.
El propósito es imprimir "Hello John"en la consola. */

function printName() {
    let helloName = "Hello John"
    function inner(){
        return helloName;
    }
    return inner;
}

console.log(printName()())