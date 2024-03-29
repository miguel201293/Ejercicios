/*Enunciado:
Crea el fromJsonmétodo que toma un json como parámetro
y devuelve un objeto de tipo Person. */
class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    static fromJson (json){
        const obj = JSON.parse(json)
        return new Person(obj.id,obj.firstName,obj.lastName,obj.age)
    }
    toJson() {
      return JSON.stringify(this);
    }
  }
  
  const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
  const developer = Person.fromJson(json);
  console.log(developer);