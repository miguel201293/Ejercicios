/*Enunciado:
A partir del ejercicio anterior, escriba un método que recupere los datos guardados localStorage 
y los imprima en la consola.*/ 

// Definimos una funcion llamada guardarUsuario que recibe como parametro el objeto usuario.
function guardarUsuario(usuario){
    // Convertimos el objeto usuario a formato JSON.
    const user = JSON.stringify(usuario);
    //Utilizamos el metodo localStorage.setItem()para guardar el usuario
    localStorage.setItem("usuario",user);
}

function devolverUsuario(){
    const usuariodevuelto=JSON.parse(localStorage.getItem("usuario"))
    console.log(usuariodevuelto)
}
// Creamos un objeto llamado usuario.
const user = {
    id: 1,
    name: "John",
    age: 25,
};
// llamamos a la funcion.
guardarUsuario(user)
devolverUsuario()