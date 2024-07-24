// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function updateTime() {
    time++;
    counterElement.innerHTML = time;
}

setInterval(updateTime,1000)

//setInterval () essentially calls or runs 
//a function/interval every however many miliseconds,
//which is the second value of the property.
//So, every second (1000 miliseconds), the function updateTime ()
//is run once, which increases the time by an increment of 1, which is then
//outputted in the counterElement, the span "time".