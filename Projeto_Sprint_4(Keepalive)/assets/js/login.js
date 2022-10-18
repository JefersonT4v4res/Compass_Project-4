const account1 = [{"login": "admin", "password": "admin"}];


function clearInputs() {
    document.getElementById("inpt_login").value = '';
    document.getElementById("inpt-password").value = '';
}

function validateLogin() {

const inptLogin = document.getElementById("inpt_login").value;
const inptPassword = document.getElementById("inpt-password").value;
document.getElementById("loading").style.display = "flex";

    let myTime = setTimeout('validateLogin()', 10000);

    if(inptLogin == "" || inptPassword == ""){
        alert("Preencha todos os campos");
        document.getElementById("loading").style.display = "none";

    }else if(account1[0].login === inptLogin && account1[0].password === inptPassword) {
        clearInputs()
        localStorage.setItem('key', '123ABRACADABRA456');
        window.location.href = "http://127.0.0.1:5500/Projeto_Sprint_4(Keepalive)/pages/home.html";
        
    }else if(account1[0].login !== inptLogin || account1[0].password !== inptPassword) {
        clearInputs()
        window.location.href = "http://127.0.0.1:5500/Projeto_Sprint_4(Keepalive)/pages/failed_login.html";
    }

}
