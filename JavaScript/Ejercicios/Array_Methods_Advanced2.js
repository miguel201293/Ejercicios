/*Enunciado:
Cree una función llamada nicknameMapque acepte una serie de personas y devuelva una serie de apodos. El apodo debe estar compuesto de esta forma: <name>-<age>.

Ejemplo:

{ name: 'Paul', age: 21 } => Paul-21*/
function nicknameMap(persons) {
    let apodo = persons.map((el)=> el.name + "-" + el.age)
    return apodo
  }
  
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  const nicknames = nicknameMap(persons);
  console.log(persons);
  console.log(nicknames);