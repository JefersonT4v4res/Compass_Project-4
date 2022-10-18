function isLoged() {
    if(localStorage.getItem('key') == null || localStorage.getItem('key') == undefined){
        alert("Você não tem a permissão necessária");
        document.body.innerHTML = '';
        window.location.href = "http://127.0.0.1:5500/Projeto_Sprint_4(Keepalive)/pages/failed_login.html";
    }
}

function logout() {
    localStorage.removeItem('key');
    window.location.replace = "http://127.0.0.1:5500/Projeto_Sprint_4(Keepalive)/index.html";
}
