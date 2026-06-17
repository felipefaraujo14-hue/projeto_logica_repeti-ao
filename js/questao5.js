document.addEventListener("DOMContentLoaded", function() {
    let divCadastro = document.getElementById("cadastroHabitantes");
    let conteudo = "";

    for (let i = 1; i <= 20; i++) {
        conteudo += `
            <h4>Habitante ${i}</h4>
            
            <label>Idade:</label>
            <input type="number" id="idade${i}">

            <label>Sexo:</label>
            <select id="sexo${i}">
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
            </select>

            <label>Renda (R$):</label>
            <input type="number" step="0.01" id="renda${i}">
            <br><br>
        `;
    }
    divCadastro.innerHTML = conteudo;
});

function calcularPesquisa() {
    
    let totalPessoas = 20;

    let somaSalarioMasc = 0;
    let qtdHomens = 0;
    let qtdMulheresRendaEspecifica = 0;
    let qtdMascSalarioMaior2000 = 0;
    let qtdFemSalarioMaior2000 = 0;
    let totalMulheres = 0;

    for (let i = 1; i <= totalPessoas; i++) {

        let idade = Number(document.getElementById(`idade${i}`).value);
        let sexo = document.getElementById(`sexo${i}`).value;
        let renda = Number(document.getElementById(`renda${i}`).value);

        if (sexo === "M") {
            qtdHomens++;
            somaSalarioMasc += renda;
            
            if (renda >= 2000) {
                qtdMascSalarioMaior2000++; 
            }
        } else if (sexo === "F") {
            totalMulheres++;

            if (renda >= 1000 && renda <= 3000) {
                qtdMulheresRendaEspecifica++;
            }

            if (renda >= 2000) {
                qtdFemSalarioMaior2000++;
            }
        }
    }

    let mediaSalarioMasc = qtdHomens > 0 ? (somaSalarioMasc / qtdHomens).toFixed(2) : 0;
    let percentualMasc = qtdHomens > 0 ? ((qtdMascSalarioMaior2000 / qtdHomens) * 100).toFixed(2) : 0;
    let percentualFem = totalMulheres > 0 ? ((qtdFemSalarioMaior2000 / totalMulheres) * 100).toFixed(2) : 0;

    let relatorio = `
        <h3>Relatório da Pesquisa:</h3>
        <p><strong>a. Quantas pessoas foram digitadas:</strong> ${totalPessoas}</p>
        <p><strong>b. A média de salário do sexo Masculino:</strong> R$ ${mediaSalarioMasc}</p>
        <p><strong>c. Quantidade de mulheres com renda entre R$ 1000.00 e R$ 3000.00:</strong> ${qtdMulheresRendaEspecifica}</p>
        <p><strong>d. Percentual de pessoas com salário maior ou igual a R$ 2000.00:</strong></p>
        <ul>
            <li>Homens: ${percentualMasc}% do total de homens</li>
            <li>Mulheres: ${percentualFem}% do total de mulheres</li>
        </ul>
    `;

    document.getElementById("resultadoPesquisa").innerHTML = relatorio;
}