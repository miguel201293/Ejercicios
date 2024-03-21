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
    return name;
}

async function nombreUsuario(id){
    const userId =  await isLoggedIn(id);
    const userDetails = await getUserDetails(userId);
    const userName = await getUserName(userDetails);
    console.log(userName);
    return userName;
}

nombreUsuario(3)
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err));
