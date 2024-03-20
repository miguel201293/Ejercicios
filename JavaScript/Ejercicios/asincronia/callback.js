/*Enunciado:
Escriba una función llamada printAsyncName, que toma una devolución de llamada
y una cadena (que será el nombre) como parámetros.
La función de devolución de llamada simplemente imprimirá "Hola".
La función printAsyncName deberá ejecutar la función de devolución de llamada
después de un intervalo de 1 segundo. Luego de un intervalo de 2 segundos,
debemos imprimir el nombre que tomamos como parámetro.*/

function printAsyncName(callback,nombre){
    setTimeout(()=>{
        console.log("Hola");
        setTimeout(()=>{
            console.log(nombre);
        },2000);
    },1000);
}

function callback (){
    console.log("Hola");
}

printAsyncName(callback,"Miguel");