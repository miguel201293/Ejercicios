//  Selecionamos el body del documento html
const body = document.documentElement.children[1];
// Nos movemos hacia bajo en el body
const ul = body.children[1];
// Nos movemos hacia arria en el body
const html = body.parentElement;
// Nos movemos lateralmente en el mismo nivel
const head = body.previousElementSibling;
