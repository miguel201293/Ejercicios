// Creamos un arry
let arr = [1,2,3,4]
// Creamos un objeto
let obj = {
    "key":1,
    "key2":2,
    "nested":{
        "mult":4,
        "str":5
    }
}
// Creamos un nuevo array desde el anterior
// primera forma
//let newArr = arr;
//newArr.push(3);
//Segunda forma
let newArr = [...arr,3]
console.log(newArr)
console.log(arr)
// Creamos un nuevo objeto
let newObj = {"newKey":45,...obj}
console.log(newObj)