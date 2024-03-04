/*Enunciado:
Defina una clase llamada Personque tome dos argumentos ( firstNamey lastName)
en el constructor.*/
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);