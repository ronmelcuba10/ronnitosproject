var x = 0;
var wrapper = document.getElementById('wrapper');
var padding = + getComputedStyle(wrapper).padding.replace('px', '');
var speeds = document.getElementsByName('speed');
var ball = document.getElementById('ball');
var toTheRight = true;

var draw = function () {
    let max = wrapper.clientWidth - ball.clientWidth - 2 * padding;
    ball.style.left = `${x}px`;

    if (x > max && toTheRight) {
        toTheRight = false;
    }

    if (x < 0 && !toTheRight) {
        toTheRight = true;
    }
    x = toTheRight ? x + getSpeed() : x - getSpeed();
}

var getSpeed = function (){
    for (let i = 0; i < speeds.length; i++){
        if (speeds[i].checked) return + speeds[i].value;
    }
}

setInterval(function () {
    draw();
}, 3);





