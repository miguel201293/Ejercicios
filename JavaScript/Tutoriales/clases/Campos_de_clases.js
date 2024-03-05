class Persona{
    name;
    age;
    nacionality;
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