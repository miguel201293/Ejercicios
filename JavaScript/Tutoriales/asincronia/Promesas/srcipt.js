let promesa = new Promise((resolve,reject) => {
    let random = Math.random();
    if ( random > 0.5){
        resolve(random);
    }else{
        reject(random);
    }
})

promesa
    .then((val) => val * 4)
    .then((val) => console.log(val))
    .catch((err) => console.error(err));
