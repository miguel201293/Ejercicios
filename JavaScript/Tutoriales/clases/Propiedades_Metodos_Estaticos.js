class Persona{
    name = "";
    age = 0;
    nacionality ="";
    // Creamos un campo estatico
    static nacionalityArray = ["US","FR","GB","ES"];
    constructor(name,age,nacionality){
        this.name = name;
        if (typeof(age) === "number"){
            this.age = age
        }else{
            this.age = Number(age)
        }
        this.nacionality = nacionality
    }
    static valido (nat =""){
        return nat in Persona.nacionalityArray
    }
}

class Estudiante extends Persona{
    estudio = "informatica";
    constructor(name,age,nacionality,estudio){
        super(name,age,nacionality)
        this.estudio = estudio
    }
}

const miguel = new Persona ("miguel",30,"ES")
const paco = new Estudiante("paco",25,"fr","psicologia")
console.log(miguel)
console.log(Persona.nacionalityArray)
console.log(Persona.valido("ES"))
