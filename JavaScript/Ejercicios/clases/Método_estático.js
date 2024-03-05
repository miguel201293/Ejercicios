/*Enunciado:
Defina un método estático llamado fromObject dentro de la clase Persona
que toma un objeto literal como parámetro y crea una instancia de un objeto Persona.*/ 
class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    static fromObject(obj){
        return new Person(obj.firstName,obj.lastName)
    }
    }
    
    const obj = {
    firstName: 'Mario',
    lastName: 'Rossi'
    };
    
    const person = Person.fromObject(obj);
    console.log(person.firstName + " " + person.lastName);
    