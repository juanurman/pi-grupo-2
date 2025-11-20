
let botonLogout = document.querySelector("#botonLogout");


if (botonLogout) {
    
    botonLogout.addEventListener("click", function(e) {
        e.preventDefault();

        localStorage.removeItem("dataUser");

        location.reload();
    });
}


