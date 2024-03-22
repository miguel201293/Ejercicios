/*Enunciado:
Usando async y await, implemente el código necesario para recuperar el Todo con ID 4
a través de la siguiente URL: https://jsonplaceholder.typicode.com/todos/4. 
Luego cree dos elementos: un <h2>elemento que contenga el título Todo (propiedad de título)
y uno <Input Type = "Checkbox"> con la propiedad Comprobada establecida
en el valor presente para la propiedad completa de Todo.
Agregue los dos elementos creados previamente dentro del contenedor. */

// Función asincrónica para recuperar el Todo con ID 4
async function data(){
    try{
        // Realizar la solicitud GET a la URL proporcionada
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/4");
        // Convertir la respuesta a formato JSON
        const todo = await respuesta.json();
        //Devolver todo
        return todo
    }catch{
        // Manejar errores en caso de que la solicitud falle
        console.error("Hubo algun error",error)
    }
}
// Función para mostrar el Todo recuperado en el DOM
async function displayData(){
    // Obtener el Todo utilizando la función data
    const todo = await data();
    // Verificar si se recuperó un Todo válido
    if(todo){
        // Obtener referencias a los elementos del DOM
        const elementoh2 = document.getElementById('title');
        const elementoinput = document.getElementById('todoCheckbox');
        // Establecer el texto del título del Todo en el elemento <h2>
        elementoh2.textContent = todo.title;
        // Establecer el estado de completado del Todo en el checkbox
        elementoinput.checked = todo.completed;
    }
}
// Llamamos a la funcion displayData().
displayData()