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

function getUserName({name,doesNotExist}){
    throw new Error ("algun error");
    console.log(doesNotExist.nested);
    return name;
}

let val = isLoggedIn(3)
    .then(getUserDetails)
    .then(getUserName)
    .then((name) => name + "appended")
    .then((val) => console.log(val))
    .catch((err)=> console.error(err))
    .finally(()=>console.log("final"))

console.log(val)