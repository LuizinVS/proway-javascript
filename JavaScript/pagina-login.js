function apresentarDados(){
    const elogin = document.querySelector("#login");
    const esenha = document.querySelector("#senha");

    let login = elogin.value;
    let senha = esenha.value;
    let mostrar = login + " ," + senha;
    alert("Login e senha: " +mostrar);
}