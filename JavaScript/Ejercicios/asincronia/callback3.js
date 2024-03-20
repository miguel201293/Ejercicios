/*Enunciado:
A partir del ejercicio anterior,
queremos agregar a nuestra función repeatHello, clearIntervaldespués de 5 segundos
¿podrías hacer eso?
La función de devolución de llamada debe ser una función de flecha,
¿puedes explicar también por qué? */
function repeatHello(callback){
    const intervalId =setInterval(()=>{
        callback();
    },1000)
    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
};

const callback = () =>{
    console.log("Hola");
};

repeatHello(callback);