const timer = 5;
let actualTime = timer;
let flag = 0;

function countTimer() {
    
    document.querySelector(".temporizador").innerHTML = actualTime;
    if(actualTime <= 0) {
        console.log("O tempo acabou"); 
        flag = 1;
    }else if(flag == 0) {
        console.log(actualTime);
        
        actualTime--;
        let myTime = setTimeout('countTimer()', 1000);
    }
    
}