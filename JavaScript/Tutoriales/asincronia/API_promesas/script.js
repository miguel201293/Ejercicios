function isLoggedIn(userId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if (rand > 0.3){
                resolve(userId);
            }else{
                reject(new Error("No esta loggeado"));
            }
        }, 500);
    })
}

function getUserDetails(userId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (userId < 5){
                resolve({"name":"Greg","otherData":"Hola"});
            }else{
                reject(new Error("El usuario no existe"));
            }
        }, 500);
    })  
}

function getUserName({name}){
    if(name === undefined){
        return Promise.reject(new Error ("El nombre no esta definido"));
    }
    return Promise.resolve(name);
}

/* Promise all (devuelve true si se cumplen todas)
Promise.all([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({name:"Greg"})
])
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err));
*/
/* Promise allsettled (las devuelve todas aunque alguna falle)
Promise.allSettled([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({name:"Greg"})
])
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err));
*/
/*Promise race(toma la primera promesa que se ejecute)
Promise.race([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({name:"Greg"})
])
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err));
*/
//Promise any
Promise.any([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({name:"Greg"})
])
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err));



