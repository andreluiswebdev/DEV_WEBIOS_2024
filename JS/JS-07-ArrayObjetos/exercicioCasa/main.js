let alunos = [
    {
        nome: "Ana",
        idade: 17,
        nota: 8 ,
        ano: "2ºB"
    },
    {
        nome: "Bruno",
        idade: 16,
        nota: 6,
        ano: "2ºC"
    },
    {
        nome: "Veronica",
        idade: 16,
        nota: 9 ,
        ano: "2ºC"
    },
    {
        nome: "Marta",
        idade: 15,
        nota: 5,
        ano: "3ºC"
    },
    {
        nome: "Brenno",
        idade: 19,
        nota: 6,
        ano: "3ºC"
    },
    {
        nome: "Maria",
        idade: 14,
        nota: 4,
        ano: "1ºF"
    },
]

console.log(alunos);

console.log(alunos[1]);

console.log('a Nota da Maria é: ' + alunos[5].nota);

console.log(JSON.stringify(alunos));