/*Enunciado:
Realice una refactorización de código utilizando los literales de plantilla.
clase Persona { constructor(primerNombre, apellido) { this.primerNombre = primerNombre; this.apellido = apellido; } }

const desarrollador = nueva Persona("Mario", "Rossi");
console.log(desarrollador.primerNombre + " " + desarrollador.apellido);  */
class Persona{
    constructor(primerNombre,apellido){
        this.primerNombre = primerNombre;
        this.apellido = apellido;
    }
}
const desarrollador = new Persona("Mario", "Rossi");
console.log(`${desarrollador.primerNombre} ${desarrollador.apellido}`); 