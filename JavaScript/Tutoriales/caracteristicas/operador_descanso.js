let arr = [1,2,3,4];
let obj ={
    "key":1,
    "key2":2,
    "nested":{
        "mult":4,
        "str":5
    }
}
let newArr = [1,2,3,4,...arr,3,4];
function makeNewArray(arr){
    return [...arr,1,2];
}
let newObj = {"newKey":45,...obj,"col":54}

class MyArray extends Array{
    customName;
    constructor(customName, ...rest){
        super(rest);
        this.customName = customName;
    }
    sum(){
        return this.reduce((a,b)=>a+b);
    }
}

let arr2 = new MyArray("something",1,2,3,4,5);
console.log(arr2);