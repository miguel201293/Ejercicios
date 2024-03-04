/*Enunciado:
Crea una clase llamada Desarrollador.
 La clase Desarrollador tiene que heredar la clase Persona creada en el ejercicio anterior.
 La clase Desarrollador toma otro argumento en el método constructor (rol).*/
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
class Developer extends Person{
    constructor(firstName,lastName,role){
        super(firstName,lastName)
        this.role = role
    }
}
const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(developer.firstName + " " + developer.lastName + " " + developer.role);