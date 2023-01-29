//Test lab Fratean Sorin, gr 2031
"use strict";
var id = 1;

//importing the news items
async function fetchdata(id) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        var footerElement = document.getElementsByTagName("footer")[0];
        var title = document.getElementById("news-title");
        var text = document.getElementById("news-body");
        console.log(id);
        id--;
        title.innerHTML = `${data[id].id}. ${data[id].title}`;
        text.innerHTML = data[id].body;
        //Changing background colors correctly for odd/even news items
        if (id % 2 != 0){
            footerElement.style.backgroundColor = "red";
            footerElement.style.color = "white";
        }
        else if (id % 2 == 0) {
            footerElement.style.backgroundColor = "yellow";
            footerElement.style.color = "black";
        }
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
}

var sec = 5;
var footerElement = document.getElementsByTagName("footer")[0];
var countElement = document.getElementById("news-countdown");
var pause = false;

//Implementing a countdown from 5 seconds to 0 seconds
var countdown = setInterval(function () {
    if(!pause){
        countElement.innerHTML = `${sec}`;
        fetchdata(id);
        sec--;
        //Correctly resetting the countdown every 5 seconds
        if (sec < 0) {
            sec = 5;
            id++;
            setInterval(countdown);
        }
    }
}, 1000);

//Pausing the countdown/import when mouse is hovering over the item and correctly resuming it.
footerElement.addEventListener('mouseenter', function(e) {
    pause = true;
});
footerElement.addEventListener('mouseleave', function(e) {
    pause = false;
});
  

// setInterval(countdown);