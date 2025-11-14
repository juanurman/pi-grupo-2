let form_login = document.querySelector(".form-login");

form_login.addEventListener("submit", function(e){
    e.preventDefault();

    let email = this.email.value;
    let password = this.password.value;

    let userObj = {
        email: email,
        password: password
    }
     // convertir a string
    let userString = JSON.stringify(userObj)

    //guardar en session storage
    sessionStorage.setItem("data", userString);

    //redirigir al perfil que se envie el formulario
    this.form_login
    
 
})
