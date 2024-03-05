class MyArray extends Array {
    sum (){
        return this.reduce((a,b) => a + b);
    }
}

let arr = new MyArray(2,3,4,5,2);
console.log(arr.sum())
let mapped = arr.map((a)=> a + 4);
console.log(mapped.sum())
let oriArr = new MyArray(3,4,5,2,4);
if (oriArr instanceof MyArray){
    console.log(oriArr.sum());
}