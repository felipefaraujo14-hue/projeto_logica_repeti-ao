function calcular() {
    let contador = 0;

    for (let i = 1; i <= 1000; i++) {
        if (i % 7 === 0) {
            contador++;
        }
    }

    document.getElementById("resultado").innerHTML =
        "Quantidade de números divisíveis por 7: " + contador;
}