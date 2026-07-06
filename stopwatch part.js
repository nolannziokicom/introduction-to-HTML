window.onload= function(){
    var seconds= 0;
    var milliseconds= 0;
    var appendmilliseconds= document.getElementById("milliseconds")
    var appendseconds=document.getElementById("seconds")
    var buttonstart= document.getElementById("button-start")
    var buttonstop= document.getElementById("button-stop")
    var buttonreset= document.getElementById("button-reset")
    var Interval;

    buttonstart.onclick= function(){
        clearInterval(Interval);
        Interval= setInterval(startTimer,10)
    }


    buttonstop.onclick= function(){
        clearInterval(Interval);
    }


    buttonreset.onclick= function(){
        clearInterval(Interval)
        milliseconds= "00"
        seconds= "00"
        appendmilliseconds.innerHTML= milliseconds;
        appendseconds.innerHTML= seconds;

    }


    function startTimer(){
        milliseconds ++;

        if (milliseconds <= 9){
            appendmilliseconds.innerHTML= "0" + milliseconds;

        }

        if (miliseconds > 9) {
            appendmilliseconds.innerHTML= milliseconds;
        }

        if (milliseconds> 99){
            seconds ++;
            appendseconds.innerHTML= "0" + seconds
            milliseconds= 0;
            appendmilliseconds.innerHTML= "0" + 0;

        }

        if ( seconds > 9){
            appendseconds.innerHTML= seconds;
        }
    }
}