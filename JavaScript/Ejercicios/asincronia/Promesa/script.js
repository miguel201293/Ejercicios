/*Enunciado:
Escribe un promise. Si la variable llamada numberes mayor que 10,
devuelve una resolución; de lo contrario, devuelve un rechazo.
Luego gestiona la promesa con theny catchen caso de algún rechazo.*/

const mayor10 = new Promise((resolve,reject) => {
    const numero = 15;
    if(numero > 10){
        resolve(numero);
    }else{
        reject(numero);
    }
})

mayor10
    .then((valor) => console.log(valor))
    .catch((err)=> console.error(err));