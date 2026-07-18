var myNumber;
var Mynumbers=Math.floor(Math.random()*6)
document.getElementById("display-area")
var stopped= true;
var x;

function stopstart() {
    if (stopped) {
        stopped = false;

        x = setInterval(change, 80)
    } else {
        clearInterval(x);
        stopped = true;
    }
}

 function limit(){
    if(Mynumber >10)
        setInterval(mynumber,1000)
 }

window.onload = function () {
    myNumber = document.getElementById("mynumber")
    stopstart();
}