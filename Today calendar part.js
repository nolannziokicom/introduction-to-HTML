function showTime(){
    var date = new Date()
    var d = date.getDate()
    var m = date.getMonth()
    var y = date.getFullYear()
    var day= date.getDay()

    var calendar = "date:" + d  +"/" +  m +"/" + y + "/" + day 

    document.getElementById("My calendar").innerText= calendar;
}

showTime();