/*ENunciado:
Usando async y await, implemente el código necesario para recuperar la lista
Todos presente en la siguiente URL a través de una solicitud .
https://jsonplaceholder.typicode.com/todos */

async function conexion(){

    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const body = await data.json()
    console.log(body)
}

conexion();