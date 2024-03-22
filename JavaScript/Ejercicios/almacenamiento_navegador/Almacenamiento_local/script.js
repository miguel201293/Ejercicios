/*Enunciado:
En el archivo exercise.js encontramos un objeto user.
Escriba una función que guarde el objeto de usuario con localStoragesu clave 'usuario'.*/ 
// Definimos una funcion llamada guardarUsuario que recibe como parametro el objeto usuario.
function guardarUsuario(usuario){
    // Convertimos el objeto usuario a formato JSON.
    const user = JSON.stringify(usuario);
    //Utilizamos el metodo localStorage.setItem()para guardar el usuario
    localStorage.setItem("usuario",user);
}
// Creamos un objeto llamado usuario.
const user = {
    id: 1,
    name: "John",
    age: 25,
};
// llamamos a la funcion.
guardarUsuario(user)