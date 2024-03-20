let count = 0;
function repeat(callback,n){
    let id = setInterval(callback,500);
    setTimeout(()=>clearInterval(id),500 * n);
}
repeat(()=> console.log("hola"),3)
repeat(()=> count += 1,5)
console.log("Empieza la ejecucion")
console.log(count)
setTimeout(()=>console.log(count),5000);