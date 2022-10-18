function clock() {
    const refresh = 1000;
    let myTime = setTimeout('currentHour()', refresh);
}

function addZero(time) {
    let value;
    if(time < 10){
        value = '0' + time;
        return value;
    }else {
        return time;
    }
}

function currentHour() {
    const date = new Date();
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    const hhmmm = [hours, minutes].join(':');
    document.querySelector(".header__hour").innerHTML = hhmmm;
    clock();
}

function getDayWeek(x) {
    x.getDay();

    for(let i = 0; i <= 12; i++) {
        if(x.getDay() == 0) {
        dayWeek = "Domingo"; 
        }else if (x.getDay() == 1) {
            dayWeek = "Segunda-feira"; 
        }else if (x.getDay() == 2) {
                    dayWeek = "Terça-feira"; 
                }else if (x.getDay() == 3) {
                    dayWeek = "Quarta-feira"; 
                }else if (x.getDay() == 4) {
                            dayWeek = "Quinta-feira"; 
                        }else if (x.getDay() == 5) {
                                dayWeek = "Sexta-feira"; 
                            }else if (x.getDay() == 6) {
                                    dayWeek = "Sábado"; 
                                    }

    }
    return dayWeek;
}

function getMonthActual(x) {
    x.getMonth();

    for(let i = 0; i <= 12; i++) {
        if(x.getMonth() == 0) {
           fullMonth = "Janeiro"; 
            }else if (x.getMonth() == 1) {
            fullMonth = "Fevereiro"; 
                }else if (x.getMonth() == 2) {
                    fullMonth = "Março"; 
                    }else if (x.getMonth() == 3) {
                        fullMonth = "Abril"; 
                        }else if (x.getMonth() == 4) {
                            fullMonth = "Maio"; 
                            }else if (x.getMonth() == 5) {
                                fullMonth = "Junho"; 
                                }else if (x.getMonth() == 6) {
                                    fullMonth = "Julho"; 
                                    }else if (x.getMonth() == 7) {
                                        fullMonth = "Agosto"; 
                                        }else if (x.getMonth() == 8) {
                                            fullMonth = "Setembro"; 
                                            }else if (x.getMonth() == 9) {
                                                fullMonth = "Outubro"; 
                                                }else if (x.getMonth() == 10) {
                                                    fullMonth = "Novembro"; 
                                                    }else if (x.getMonth() == 11) {
                                                        fullMonth = "Dezembro"; 
                                                    }
    }
    return fullMonth;
}


function currentDate() {
    const date = new Date();
    const dayweek = getDayWeek(date);
    const day = date.getDate();
    const month = getMonthActual(date) 
    const year = date.getFullYear();
    
    const dmy = `${dayweek},  ${day} de ${month} de ${year}`;
    
    document.querySelector(".header__fullDate").innerHTML = dmy;
}
