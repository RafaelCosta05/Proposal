function SIM (t) {
    alert("Amo te demais")
}

function desvia(t) {
    var btn = t;
    btn.style.position = "absolute";
    btn.style.bottom=geraPosiçao(10, 90);
    btn.style.left=geraPosiçao(10 ,90);
    console.log("opa, desviei-me");
}

function geraPosiçao(min, max) {
    return Math.random() * (max - min) + "%";
}