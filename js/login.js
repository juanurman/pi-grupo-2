let form_login = document.querySelector(".form-login");

form_login.addEventListener("submit", function(e){
    e.preventDefault();

    let email = this.email.value;
    let password = this.password.value;

    if (email === "" || password === "") {
        alert("Por favor, completa estos campos")
    }

    let userObj = {
        email: email,
        password: password
    }
    
    let userString = JSON.stringify(userObj)

    //guardar en session storage
    sessionStorage.setItem("dataUser", userString);

    //redirigir al perfil que se envie el formulario
    this.form_login
    
 })
