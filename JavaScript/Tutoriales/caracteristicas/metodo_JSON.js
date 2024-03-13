// Creamos una clase hijo
class Child{
    age;
    name;
    constructor(age,name){
        this.age = age;
        this.name = name;
    }
    toJSON(){
        return this.name
    }
}
// Creamos un objeto JSON
let json = {
    "name":"Sally",
    "birthday": new Date(1987,10,13),
    "children": [
        new Child(4,"Billy"),
        new Child(3,"Sally.jr")
    ]
}
// Convertimos el JSON en una cadena
let str = JSON.stringify(json)
// Conervertimos la cadena en JSON
let obj = JSON.parse(str)
console.log(obj)