/*Enunciado:
En este ejercicio hemos creado dos objetos: person1e person2. El objeto person2ha sido asignado al objeto person1. Debes modificar la propiedad firstNamedel objeto person2en "Simon".

Escribe un comentario explicando por qué, al modificar el objeto person2, también person1se modificaría el objeto.

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2); */

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  person2.firstName="Simon";
  // Modify the property `firstName` of the `person2` in "Simon".
  person2.firstName="Simon";
  // Mostramos a ambas personas
  console.log(person1);
  console.log(person2);
  /* Explicacion.
  Por que al copiar el objeto, tambien copiamos sus atributos que son los mismos
  en cada objeto, es decir tienen la misma referencia y al modificarlo en uno
  lo modificamos en el otro tambien */
  