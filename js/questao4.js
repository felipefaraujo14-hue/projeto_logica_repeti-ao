document.addEventListener("DOMContentLoaded", function() {
    let divCadastro = document.getElementById("cadastroPessoas");
    let conteudo = "";

    for (let i = 1; i <= 20; i++) {
        conteudo += `
            <h4>Pessoa ${i}</h4>
            
            <label>Nome:</label>
            <input type="text" id="nome${i}">

            <label>Idade:</label>
            <input type="number" id="idade${i}">

            <label>Sexo:</label>
            <select id="sexo${i}">
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
            </select>
            <br><br>
        `;
    }
    divCadastro.innerHTML = conteudo;
});

function calcularEstatisticas() {
    let inferior18 = 0;
    let acima65 = 0;
    let entre18e65 = 0;
    let masculino = 0;
    let feminino = 0;

    for (let i = 1; i <= 20; i++) {
        let idade = Number(document.getElementById(`idade${i}`).value);
        let sexo = document.getElementById(`sexo${i}`).value;

        if (idade < 18) {
            inferior18++;
        } else if (idade > 65) {
            acima65++;
        } else if (idade >= 18 && idade <= 65) {
            entre18e65++;
        }
        if (sexo === "M") {
            masculino++;
        } else if (sexo === "F") {
            feminino++;
        }
    }

    let relatorio = `
        <h3>Relatório Final:</h3>
        <p><strong>a. Pessoas com idade inferior a 18 anos:</strong> ${inferior18}</p>
        <p><strong>b. Pessoas com idade acima de 65 anos:</strong> ${acima65}</p>
        <p><strong>c. Pessoas com idade entre 18 e 65 anos:</strong> ${entre18e65}</p>
        <p><strong>d. Total por sexo:</strong></p>
        <ul>
            <li>Masculino: ${masculino}</li>
            <li>Feminino: ${feminino}</li>
        </ul>
    `;

    document.getElementById("resultadoEstatisticas").innerHTML = relatorio;
}