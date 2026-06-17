// Estrutura de repetição FOR
const divfor = document.querySelector('#div-for')

for (let i = 0; i < 10; i++) {
    console.log(i, "ola")
    divfor.innerHTML += `${i} - ola <br>`
}

// CONTADOR / ACUMULADOR

const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0

btnNum.addEventListener('click', (evt) => {
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `
        TOTAL DE NÚMEROS DIGITADOS: ${cont} <br>
        A SOMA DOS NÚMEROS É: ${acum}
    `

    inputNum.value = ""
})

//CONTROLANDO FOR

const inputFrase = document.querySelector ('#frase')
const inputNumRepeticao = document.querySelector ('#num-repeticao')
const btnFrase = document.querySelector ('#btn-frase')
const divFrase = document.querySelector ('#div-frase')