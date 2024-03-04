// Creamos una clase
class Person{
    constructor(name,age,nacionality){
        this.name = name;
        if (typeof(age) === "number"){
            this.age = age
        }else{
            this.age = Number(age)
        }
        this.nacionality = nacionality
    }
}

const miguel = new Person("miguel",30,"española")
console.log(miguel)
const greb = new Person("greb",28,"US")
console.log(greb)