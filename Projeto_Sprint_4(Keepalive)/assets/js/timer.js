const timer = 180;
let actualTime = timer;
let flag = 0;

function countTimer() {
    
    document.querySelector(".timer").innerHTML = actualTime;
    if(actualTime <= 0) {
        console.log("O tempo acabou"); 
        flag = 1;
    }else if(flag == 0) {
        actualTime--;
        let myTime = setTimeout('countTimer()', 1000);
    }
    
}