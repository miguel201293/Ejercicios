// Creamos un Array
let palabras = ["This","is","my","friend","Joe"]
let frase = ""
let flecha = (el) => {
    console.log(el);
    frase += el;
};
// Foreach
palabras.forEach(flecha);
console.log(frase)
//hace lo mismo
/*
for(let el of palabras){
    console.log(el);
}
*/
// Map
let mapeado = palabras.map((el) => el + "!")
console.log(mapeado)// El mapeado sirve para sacar un array nuevo de uno ya existente.
// Reduce
let longitudTotal = palabras.reduce((a, b, i) => {
    if (i == 1){
        return a.length + b.length;
    }else{
        return a + b.length;
    }
});
console.log(longitudTotal);
// Sort
let ordenar = palabras.sort((a, b) => a.length - b.length)
console.log(ordenar)
// filter
let tamanio_palabras = palabras.filter((el) => el.length > 2);
console.log(tamanio_palabras)

