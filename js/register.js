let formRegister = document.querySelector(".form-register");

formRegister.addEventListener("submit", function(e){
    e.preventDefault();



    let email = this.email.value;
    let password = this.password.value;
    let passwordConfirm = this.passwordConfirm.value;
    let terminos = this.terminos.value

    if (email === "") {
        alert("Por favor, rellena el campo Email");
    }
    else if (password === "") {
        alert("Por favor, rellene el campo Contraseña")
    }
    else if (password.length < 6) {
        alert("La contraseña debe tener almenos 6 caracteres ");
    }
   
    else if (password != passwordConfirm) {
        alert("Las contraseñas no coinciden");
    }
     
     else {
            let userObj = {
        email: email,
        password: password
    };
    let userString = JSON.stringify(userObj)
    
    localStorage.setItem("dataUser", userString);

    this.submit();
}
})


    
