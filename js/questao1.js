let contador = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        contador++;
    }
}

console.log("Quantidade de números divisíveis por 7:", contador);