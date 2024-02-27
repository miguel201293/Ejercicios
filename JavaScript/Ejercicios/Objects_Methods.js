/* Enunciado
Crea un objeto person. Imprima su par clave/valor en la consola. Intenta utilizar el método Object.keys:

firstName: Mario
lastName: Rossi
age: 25
*/
// Creamos un objeto persona.
let person = {
    "firstName": "Mario",
    "lastName": "Rossi",
    "age": 25
}
// guardamos en una variable las claves.
let claves = Object.keys(person)
// Utilizamos el bucle for each para recorrer las claves y devovler. el par clave valor
claves.forEach(function(clave){
    console.log(clave + ": " + person[clave]);
});







