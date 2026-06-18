// Estrutura de repetição FOR

const divFor = document.querySelector('#div-for')

for (let i = 0; i < 10; i++) {
    console.log(i, "ola")
    divFor.innerHTML += `${i} - ola <br>`
}

// CONTADOR / ACUMULADOR

const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0

btnNum.addEventListener('click', () => {

    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `
        TOTAL DE NÚMEROS DIGITADOS: ${cont} <br>
        A SOMA DOS NÚMEROS É: ${acum}
    `

    inputNum.value = ""
})

// CONTROLANDO FOR

const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', () => {

    let frase = inputFrase.value
    let repeticoes = Number(inputNumRepeticao.value)

    divFrase.innerHTML = ""

    for (let i = 0; i < repeticoes; i++) {
        divFrase.innerHTML += frase + "<br>"
    }

})

// COLEÇÃO DE DADOS - ARRAY

const presentes = ['Bicicleta','Celular','Camisa do Mengão','Doleira','Tênis Adidas']

const divArray = document.querySelector('#div-array')

for (let i = 0; i < presentes.length; i++) {
    divArray.innerHTML += `${presentes[i]} <br>`
}

// FOR IN

const divForIn = document.querySelector('#div-forin')

for (let posicao in presentes) {
    divForIn.innerHTML += `${presentes[posicao]} <br>`
}

// FOR OF

const divForOf = document.querySelector('#div-forof')

for (let elemento of presentes) {
    divForOf.innerHTML += `${elemento} <br>`
}

// FOREACH

const divForeach = document.querySelector('#div-foreach')

presentes.forEach((elemento, posicao) => {
    divForeach.innerHTML += `${posicao + 1} - ${elemento} <br>`
})

// COLEÇÃO DE OBJETOS LITERAIS - ARRAY

const pessoas = [
    { nome: 'Maria Flor', idade: 25, renda: 8500 },
    { nome: 'Joerdson Souza', idade: 75, renda: 5000 },
    { nome: 'Taoca', idade: 28, renda: 500 }
]

// LISTANDO OBJETO LITERAL PELO FOR

const divListaObjFor = document.querySelector('#div-listaobj-for')

for (let i = 0; i < pessoas.length; i++) {

    divListaObjFor.innerHTML += `
        ${pessoas[i].nome}, ${pessoas[i].idade} idade,
        R$ ${pessoas[i].renda.toFixed(2).replace('.', ',')}
        <br>
    `
}