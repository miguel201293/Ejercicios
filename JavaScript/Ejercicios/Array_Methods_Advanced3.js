/* Enunciado:
Cree una función llamada ageAverageque incluya una serie de personas
y devuelva la edad promedio.
*/
function calculateAverageAge(persons) {
    let edadtotal = persons.reduce((a, b) => a + b.age, 0);
    return edadtotal / persons.length;
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
  
  const average = calculateAverageAge(persons);
  console.log(persons);
  console.log(average);