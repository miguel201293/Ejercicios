/*Enunciado:
En este ejercicio necesitamos filtrar las propiedades del objeto persona para convertir
solo los valores de identificación y edad a JSON.*/
const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,

    toJSON(person){
        return{
            id : this.id,
            age: this.age
        }
    }
};
  
const json = JSON.stringify(person);
  
console.log(json); // Should return: { "id": 1, "age": 25 }