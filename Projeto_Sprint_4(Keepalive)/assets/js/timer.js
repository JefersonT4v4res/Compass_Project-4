const timer = 50;
let actualTime = timer;
let flag = 0;

function countTimer() {
    
    document.querySelector(".timer").innerHTML = actualTime;
    if(actualTime <= 0) {
        let answer = confirm("Deseja continuar logado?");

        if(answer === true) {
            document.location.reload(true);
            flag = 1;
        }else if(answer === false){
            window.location.replace("http://127.0.0.1:5500/Projeto_Sprint_4(Keepalive)/index.html");
            localStorage.removeItem('key');
        }
       
    }else if(flag == 0) {
        actualTime--;
        let myTime = setTimeout('countTimer()', 1000);
    }
    
}