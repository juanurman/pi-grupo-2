let formLogin = document.querySelector("form-login");

formLogin.addEventListener("submit", function(e){
    e.preventDefault();


    let email = this.email.value;
    let password = this.password.value;

    if (email === "" || password === "") {
        alert("Por favor, completa estos campos");
    }
     else if (password.length < 6) {
        alert("La contraseña debe tener almenos 6 caracteres ");
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
