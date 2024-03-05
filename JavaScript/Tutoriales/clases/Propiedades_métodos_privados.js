class Persona{
    name = "";
    #age = 0;
    nacionality ="";
    // Creamos un campo estatico
    static nacionalityArray = ["US","FR","GB","ES"];
    constructor(name,age,nacionality){
        this.name = name;
        if (typeof(age) === "number"){
            this.#age = age
        }else{
            this.#age = Number(age)
        }
        if(Persona.#valido(nacionality)){
        this.nacionality = nacionality;
        }else{
            this.nacionality = "";
        }
    }
    static #valido (nat =""){
        return Persona.nacionalityArray.reduce(
            (prev,curr) => prev || curr === nat, false
        );
    }

    sayAge(){
        return "yo tengo " + this.#age + " años."
    }
}

class Estudiante extends Persona{
    estudio = "informatica";
    constructor(name,age,nacionality,estudio){
        super(name,age,nacionality)
        this.estudio = estudio
    }
}

let greg = new Persona("greg",35,"US")
let susan = new Estudiante("Susan",28,"DE","Informática")
console.log(greg)
console.log(susan)

