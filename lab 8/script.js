"use strict";
var hitPoints = 0;

function formatTime(timeNumber){
    if (timeNumber >= 10)
        return timeNumber;
    else{
        var newTime = "0" + timeNumber;
        return newTime;
    }
}

function showTime(){
    const date = new Date();
    let time = formatTime(date.getHours()) + ":" + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds());
    document.getElementById("resultDiv").innerHTML = "The time is " + time;
}

function dayOfWeek(){
    const date = new Date();
    let day = date.getUTCDay();
    // console.log(day);
    switch (day){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";    
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default: day = "Beautiful day :)!";          
    }
    document.getElementById("resultDiv").innerHTML = "Today is " + day;
}

function doubleClick(){
    hitPoints++;
    document.getElementById("resultDiv").innerHTML = "I have been double-clicked " + hitPoints + " times";
}

function sumFunction(){
    console.log(1);
    var sum = 0;
    var number = document.querySelector('#sumNum').value;
    for(var i = 1; i <= number; ++i){
        sum += i;
    }
    document.getElementById("resultDiv").innerHTML = "The sum is " + sum;
}

document.getElementById("timeBtn").addEventListener("click", showTime);
document.getElementById("h2Hover").addEventListener("mouseover", dayOfWeek);
document.getElementById("h3DblClick").addEventListener("dblclick", doubleClick);
document.getElementById("calcBtn").addEventListener("click", sumFunction);