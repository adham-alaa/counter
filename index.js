let count = 0;

document.getElementById("decrement").onclick = function () {
    count = count - 1;
    document.getElementById("counter").innerHTML = count;
    if (count === 69) {
        alert("Nice!");
    }
};

document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("counter").innerHTML = count;
    
};

document.getElementById("increment").onclick = function () {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
    if (count === 69) {
        alert("Nice!");
    }
};

