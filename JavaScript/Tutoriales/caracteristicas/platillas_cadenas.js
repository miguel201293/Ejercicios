class Persona {
    nombre ="";
    edad = 0;
    constructor(nombre,edad){
        this.nombre = nombre;
        if(typeof(edad)==="number"){
            this.edad =edad;
        }else{
            this.edad = Number(edad);
        }
       }
    
    decirEdad(){
        return `yo tengo ${this.edad} ${this.edad === 1 ? "año":"años"}`;
    }
}

let susan = new Persona("Susan",35);
let hija = new Persona("Susan.Jr",1);
console.log(susan.decirEdad());
console.log(hija.decirEdad())