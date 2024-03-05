class MyArray extends Array {
    sum (){
        return this.reduce((a,b) => a + b);
    }
}

let arr = new MyArray(2,3,4,5,2);
console.log(arr.sum())
