
var dice;
var result;

var dices = [
    '&#9856;',
    '&#9857;',
    '&#9858;',
    '&#9859;',
    '&#9860;',
    '&#9861;'
];

var stopped = true;
var t;
var number;

function change() {

    number = Math.floor(Math.random() * 6) + 1;

    dice.innerHTML = dices[number - 1];

    result.innerHTML = "Rolling...";
}

function stopstart() {

    if (stopped) {

        stopped = false;

        result.innerHTML = "Rolling...";

        t = setInterval(change, 80);

    } else {

        clearInterval(t);

        stopped = true;

        result.innerHTML = "You rolled: " + number;
    }
}

window.onload = function () {

    dice = document.getElementById("dice");

    result = document.getElementById("result");

    change();

};
