let num = document.getElementById("number");
let tracking = document.getElementById("all")

let count = 0;

function increment() {
    count += 1;
    num.innerText = count;
}

function allTracking() {
    tracking.innerText = tracking.innerText + ' ' + count;
    count = 0;
}

