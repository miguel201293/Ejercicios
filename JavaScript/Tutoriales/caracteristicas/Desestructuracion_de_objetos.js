// Creamos un array
let arr = [1,2,3,4];
// Creamos un segundo array
let [i,j,k,l] = arr;
// vemos los valores del array
console.log(i)
// Creamos un Objeto
let obj = {
    "key":1,
    "key2":2
}
console.log(Object.entries(obj));

for(let entry of Object.entries(obj)){
    let [key,value] = entry;
    obj[key] = value /2;
}
console.log(obj)

let {key,value} = obj;