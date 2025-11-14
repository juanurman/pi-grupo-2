//recuperar info de sesion
let data = sessionStorage.getItem("data)")

//convertir los datos en obj
let dataObj = JSON.parse(data)

//recuperar elemtno del DOM saludo, mensaje ylista de los links
let saludo = document.querySelector(".saludo");
let mensaje = document.querySelector(".mensaje");
let lista = document.querySelector(".lista");

//preguntar si los datos existen

if (dataObj) {
    //modificar textos en el dom
saludo.innerText = ` Hola ${dataObj}`
mensaje.innerText = ` Bienvenido a nuestra pagina`
}

