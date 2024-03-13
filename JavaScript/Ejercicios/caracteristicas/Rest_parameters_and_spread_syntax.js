/*Enunciado:
¿Sabes cómo "fusionar" el valor de la newNumber
variable numberStoresin utilizar el método de matriz push?*/
let numberStore = [0, 1, 2];
let newNumber = 3;
//numberStore.push(newNumber);
numberStore = [...numberStore,newNumber]
console.log(numberStore);