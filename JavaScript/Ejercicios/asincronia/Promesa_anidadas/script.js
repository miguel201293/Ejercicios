/*Enunciado:
Escribe un primero promiseque tome como parámetro la variable isLogged.
Si la variable es verdadera, devolvemos un número aleatorio de la resolución;
de lo contrario, enviamos un error.
Escribimos un segundo promiseque toma como parámetro una variable de tipo número.
Si el parámetro de entrada es mayor que 0.5, en la resolución
debemos devolver los siguientes datos: {name: "John", age: 24},
de lo contrario debemos enviar un error. Una vez hecho esto,
intente encadenar las promesas para eventualmente 
devolver el objeto final.{name: "John", age: 24}*/


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
