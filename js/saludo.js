let usuario = localStorage.getItem("dataUser");

let dataObj = JSON.parse(usuario);

let sectLogin = document.querySelector(".h-n-sect2")

if (dataObj) {
    
    sectLogin.innerHTML = 


    ` <section class="h-n-sect2">
     <a href="" class="h-n-s2-a-img">
    <img src="./img/icons8-paper-bag-64.png" alt="" class="h-n-s2-img-a">
    </a>
    <p class="h-n-s2-a" >Bienvenido! ${dataObj.email} </p>
    <a href="#" class="h-n-s2-a1" id="botonLogout"> Logout </a>
    </section> `
}   





