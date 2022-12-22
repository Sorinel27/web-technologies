//Lab 09 Fratean Sorin, group 2031
"use strict";
var cookieExpiryPeriod = 364;

window.onload = checkCookie;

const h1_elements = document.getElementsByTagName("h1");
const h1_elements_length = h1_elements.length;
const block_elements = document.getElementsByTagName("blockquote");
const color_picker = document.getElementById("bgcolor");

for(var i = 0; i < h1_elements_length; ++i){
    h1_elements[i].addEventListener("click", showFAQ);
}

function showFAQ(){
    this.classList.toggle("opened");
    this.nextElementSibling.classList.toggle("showAnswer");
}

function setCookie(cookieName, cookieValue, valDays){
    var currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (valDays * 24 * 60 * 60 * 1000));
    var exp = "expires=" + currentDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + exp + ";path=/";
}
function getCookie(cookieName){
    var name = cookieName + "=";
    var cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; ++i){
        let crtCookie = cookieArray[i];
        while (crtCookie.charAt(0) == ' '){
            crtCookie = crtCookie.substring(1);
        }
        if (crtCookie.indexOf(name) == 0){
            return crtCookie.substring(name.length, crtCookie.length);
        }
    }
    return "";
}
function checkCookie(){
    var user = getCookie("background_color");
    document.body.style.backgroundColor = user;
    const color_picker = document.getElementById("bgcolor");
    color_picker.value = user;
    if(user == ""){
        const color_picker = document.getElementById("bgcolor");
        user = color_picker.value;
        if(user != "" && user != null){
            setCookie("background_color", user, cookieExpiryPeriod);
        }
    }
}
function paint(){
    const color_picker = document.getElementById("bgcolor");
    document.body.style.backgroundColor = color_picker.value;
    console.log(color_picker.value);
    var user = color_picker.value;
    if(user != "" && user != null){
        setCookie("background_color", user, cookieExpiryPeriod);
    }
}
color_picker.addEventListener("change", paint);