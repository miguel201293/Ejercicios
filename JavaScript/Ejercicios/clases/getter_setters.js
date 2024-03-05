/*Enunciado:
Defina una clase llamada Personque tome tres parámetros en el constructor
( firstName, lastNamey age). Cree los métodos getters y setters para cada propiedad
y un método getter llamado fullNameque devuelva el nombre completo.*/ 
class Person {
    _firstName;
    _lastName;
    _age
    constructor(firstName,lastName,age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    set firstName(newValue){
        this._firstName = newValue;
    }
    set lastName(newValue){
        this._lastName = newValue;
    }
    set age(newValue){
        this._age = newValue;
    }
    get firstName (){
        return this._firstName;
    }
    get lastName (){
        return this._lastName;
    }
    get age (){
        return this._age;
    }
    get fullName (){
        return this._firstName + " " + this._lastName;
    }
    }
    
    const person = new Person('Mario', 'Rossi', 25);
    console.log(person.fullName);
    
    person.firstName = 'Maria';
    person.lastName = 'Verdi';
    console.log(person.fullName);