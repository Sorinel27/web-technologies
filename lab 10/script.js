"use strict";
var index = 10;

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await response.json();
        console.log(data);
        var jsData = data;

        var tbdy = document.getElementsByTagName('tbody')[0];
        for (var i = 0; i < 10; i++) {
            var tr = document.createElement('tr');
    
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(jsData[i].userId));
            tr.appendChild(td);

            var td = document.createElement('td');
            td.appendChild(document.createTextNode(jsData[i].id));
            tr.appendChild(td);

            var td = document.createElement('td');
            td.appendChild(document.createTextNode(jsData[i].title));
            tr.appendChild(td);

            tbdy.appendChild(tr);
        }

    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

fetchData();

var sec = 5;
var button1 = document.getElementById('getDataBtn');
button1.addEventListener('click', async function(){
    console.log('clicked');
    this.disabled = true;

    var countdown = setInterval(function() {
        console.log(sec);
        button1.innerHTML = `Timeout ${sec}s`;
        button1.style.backgroundColor = "gainsboro";
        button1.style.color = "black";
        sec--;
        if (sec < 0) {
          clearInterval(countdown);
          button1.innerHTML = "Load more data...";
          button1.style.backgroundColor = "greenyellow";
          button1.disabled = false;
          button1.style.color = "black";
        }
    }, 1000);
    sec = 5;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await response.json();
        console.log(data);
        var jsData = data;


        var tbdy = document.getElementsByTagName('tbody')[0];
        for (var i = index; i < index + 5; i++) {
            var tr = document.createElement('tr');
    
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(jsData[i].userId));
            tr.appendChild(td);

            var td = document.createElement('td');
            td.appendChild(document.createTextNode(jsData[i].id));
            tr.appendChild(td);

            var td = document.createElement('td');
            td.appendChild(document.createTextNode(jsData[i].title));
            tr.appendChild(td);

            tbdy.appendChild(tr);
        }
        index += 5;

    } catch (error) {
        console.error("Error fetching data: ", error);
    }
});
