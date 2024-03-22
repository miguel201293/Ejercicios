/*Enunciado:
Usando async y await, implemente el código necesario para realizar una solicitud HTTP POST.
Para crear una nueva publicación, utilice la siguiente URL: https://jsonplaceholder.typicode.com/posts (Método: Publicación).
El cuerpo de la solicitud debe contener un objeto de publicación con la siguiente información:
título y Bandera Completada. Los datos del puesto deben transmitirse tras la elaboración
de un formulario. */
// Creamos una variable la cual pasaremos como parametro
const URL ="https://jsonplaceholder.typicode.com/posts"
const formData = {
    method: "POST",
    body: JSON.stringify({
        title: "new post",
        completed: true,
  }),
    headers: {
    "Content-type": "application/json; chartset=UTF-8",
  },
};

async function crearPublicacion(url,formData) {
      const data = await fetch(url, formData);
      const respuesta = await data.json();
      console.log(respuesta);
}

crearPublicacion(URL,formData)
