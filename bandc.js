var i = 1;
var N = 4;

function next() {
    if (i < N)
        i += 1;
    else
        i = 1;
    document.getElementById("slider").setAttribute("src", i + ".webp")
}

function back() {
    if (i > 1)
        i -= 1;
    else
        i = N;
    document.getElementById("slider").setAttribute("src", i + ".webp");
}

function autoPlay() {
    setInterval(next, 6000)
}