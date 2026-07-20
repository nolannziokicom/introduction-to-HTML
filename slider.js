var index=0;
function slider(){
    var i;
    var j= document.getElementsByClassName("myslides")

    for (i=0; i<j.length; i++) {
        j[i].style.display="none"
    }

    index++;
    if (index>j.length) {
        index=1;

    }

    j[index - 1].style.display="block";

    setTimeout(slider,2000)
}

slider()