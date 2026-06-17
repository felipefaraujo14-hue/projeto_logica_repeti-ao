let totalPessoas = 0;
let podemDoar = 0;
let naoPodemDoar = 0;

function verificar() {

    let idade = Number(document.getElementById("idade").value);
    let peso = Number(document.getElementById("peso").value);

    if (idade <= 0 || peso <= 0) {
        alert("Informe idade e peso válidos.");
        return;
    }

    if (totalPessoas < 12) {

        totalPessoas++;

        if (idade >= 18 && idade <= 60 && peso > 50) {
            podemDoar++;
            document.getElementById("resultado").innerHTML +=
                "Pessoa " + totalPessoas + ": Pode doar sangue.<br>";
        } else {
            naoPodemDoar++;
            document.getElementById("resultado").innerHTML +=
                "Pessoa " + totalPessoas + ": Não pode doar sangue.<br>";
        }

        if (totalPessoas == 12) {
            document.getElementById("resultado").innerHTML +=
                "<hr>" +
                "Pessoas que podem doar: " + podemDoar + "<br>" +
                "Pessoas que não podem doar: " + naoPodemDoar;
        }
    }

    document.getElementById("idade").value = "";
    document.getElementById("peso").value = "";
}