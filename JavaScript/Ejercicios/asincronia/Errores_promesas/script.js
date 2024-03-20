/*Enunciado:
A partir del ejercicio anterior, intente manejar mejor todos los errores
a través de la Errorclase y el catchmétodo.
Añade también el finallymétodo. */

function conexion(isLogged){
    return new Promise ((resolve,reject)=>{
        if (isLogged){
            resolve(Math.random());
        }else{
            reject(new Error("usuario no conectado"));
        }
    })
}

function proceso_data(number){
    return new Promise ((resolve,reject)=>{
        if(number > 0.5){
            resolve({name:"John",age:24});
        }else{
            reject(new Error("numero menor o igual que 0,5 "));
        }
    })
}

const isLogged = true;

conexion(isLogged)
    .then(randoNumber => proceso_data(randoNumber))
    .then(data =>{
        console.log(data);
    })
    .catch(error => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("final del proceso");
    });