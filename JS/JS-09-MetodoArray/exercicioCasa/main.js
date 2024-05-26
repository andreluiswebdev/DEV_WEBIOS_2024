// INICIO EXERCICIO 1

let parImpar = [17, 43, 8, 4, 97, 56, 29]

parImpar.forEach(numero => { 
    if (numero % 2 === 0) {  // (%) retorna o resto da divisão
        console.log(`Número par: ${numero}`);
    }else{
        console.log(`Número ímpar: ${numero}`);
    }
})

// FIM EXERCICIO 1

// INICIO EXERCICIO 2

let filtro = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61]

let resultado = filtro.filter(num => num > 20 && num < 80) // aqui utilizei "&&" para combinar essas duas condições "se o número for maior que vinte E menor que 80 então é true"

console.log(resultado);

// FIM EXERCICIO 2