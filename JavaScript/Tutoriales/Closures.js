// Creamos una variable global
let something = 5;
// Creamos una funcion que devuelva la variable global.
function func() {
    return something
}
// veremos lo que devuelve dicha funcion
console.log(func());
// Creamos una funcion 2.
function outer() {
    let something =10;
    function inner() {
        return something
    }
    return inner;
}
// vemos lo que nos sevuelve esta vez
console.log(outer()());