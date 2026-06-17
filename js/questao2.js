function verificar() {
    let numero = Number(document.getElementById("numero").value);
    let divisores = "";

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores += i + " ";
        }
    }

    document.getElementById("resultado").innerHTML =
        "Divisores de " + numero + ": " + divisores;
}