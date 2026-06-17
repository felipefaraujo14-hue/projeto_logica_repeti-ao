// ====== PARTE 1: RECEBER A IDADE E PESO DE 12 PESSOAS ======
// O script seleciona o espaço do HTML e cria os 12 campos automaticamente
let divPessoas = document.getElementById("pessoas");
let conteudoInputs = ""; 

for (let i = 1; i <= 12; i++) {
    conteudoInputs += `
        <h4>Pessoa ${i}</h4>
        <label>Idade:</label>
        <input type="number" id="idade${i}">

        <label>Peso:</label>
        <input type="number" id="peso${i}">
        <br><br>
    `;
}
divPessoas.innerHTML = conteudoInputs;

function verificar() {
    let podemDoar = 0;
    let naoPodemDoar = 0;
    let texto = "";

  
    for (let i = 1; i <= 12; i++) {
        let idad = Number(document.getElementById(`idade${i}`).value);
        let pes = Number(document.getElementById(`peso${i}`).value);

      
        if (idad >= 18 && idad <= 60 && pes > 50) {
            podemDoar++;
            texto += `Pessoa ${i}: Poderá doar sangue.<br>`; // Mensagem individual
        } else {
            naoPodemDoar++;
            texto += `Pessoa ${i}: Não poderá doar sangue.<br>`; // Mensagem individual
        }
    }

    texto += `<br><strong>Puderam doar:</strong> ${podemDoar}<br>`;
    texto += `<strong>Não puderam doar:</strong> ${naoPodemDoar}`;

    document.getElementById("resultado").innerHTML = texto;
}