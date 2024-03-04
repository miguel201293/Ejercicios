class Persona{
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

class Estudiante extends Persona{
    constructor(name,age,nacionality,estudio){
        super(name,age,nacionality)
        this.estudio = estudio
    }
}

const miguel = new Persona ("miguel",30,"esp")
const paco = new Estudiante("paco",25,"fr","psicologia")
console.log(miguel)
console.log(paco)