/*Enunciado:
Escriba una función llamada repeatHelloque tome una devolución de llamada como parámetro.
La función de devolución de llamada simplemente imprimirá "Hola".
La función repetirHello deberá ejecutar la función de devolución de llamada
con un intervalo de 1 segundo.
La función de devolución de llamada debe ser una función de flecha.*/

function repeatHello(callback){
    setInterval(()=>{
        callback();
    },1000)
};

const callback = () =>{
    console.log("Hola");
};

repeatHello(callback);