/*Enunciado:
Utilice la desestructuración para asignar los valores solo con una línea de código.*/
const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  const {id,firstName,lastName,age} = person
  
  console.log(id, firstName, lastName, age);