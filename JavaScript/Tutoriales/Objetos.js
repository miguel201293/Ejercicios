// Creamos un Objeto anidado
let anidado = {
    "Subobjeto" : {
        "value" : 1,
        "value2" : 2,
        "objeto_anidado": {
            "value": 3
        }
    }
}
/*
// Mostramos las claves de nuestro objeto utlizando un bucle for.
for(const key in anidado){
    console.log(key)
}
*/
// Revisamos todas las claves de nuestro objeto con la funcion Objet.keys
let keys = Object.keys(anidado)
console.log(keys)
// Revisamos todas las claves de nuestro subobjeto con la funcion Objet.keys
let keys1 = Object.keys(anidado.Subobjeto)
console.log(keys1)
// Revisamos todos los valores de nuestro objeto con la funcion Object.values
let values = Object.values(anidado)
console.log(values)
// Revisamos todos los valores de nuestro subobjeto con la funcion Object.values
let values1 = Object.values(anidado.Subobjeto)
console.log(values1)
// Revisamos todas las claves y valores de nuestro objeto con la funcion Object.entries.
let entrada = Object.entries(anidado)
console.log(entrada)
// Revisamos todas las claves y valores de nuestro Subobjeto con la funcion Object.entries.
let entrada1 = Object.entries(anidado.Subobjeto)
console.log(entrada1)
// Destructuracion
for (const entry of entrada1){
    let [key,val] = entry
    console.log(key)
    console.log(val)
    if (val === "number"){
        anidado.Subobjeto[key] = val + 3;
    }
}
console.log(anidado.Subobjeto)
