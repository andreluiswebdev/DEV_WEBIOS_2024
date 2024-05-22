// Objetos
let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "Preto",
    nome: "Caio",
    sobrenome: "Maciel",
    hobbie: ["Futebol", "LOL", "Tocar guitarra"],
    // criando outro objeto
    endereco: {
        rua: "Jao medeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "SP"
    }
}
console.log(pessoa);
console.log(pessoa.nome); //retornar apenas uma propriedade
console.log(pessoa.hobbie);
console.log(pessoa.hobbie[1]);
console.log(pessoa.endereco);
console.log(pessoa.endereco.numero);

console.clear();

// Array de objetos

let tarefa = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Deitar"
    },
    {
        id: 3,
        isPronta: true,
        nomeTarefa: "Falar"
    }
]

console.log(tarefa);
console.log(tarefa[0].isPronta);

console.clear();

// JSON 


let recebeJAILSON = JSON.stringify(pessoa) // stringify transforma tudo em texto

console.log(recebeJAILSON);

console.clear();

var JSONITO = '{ "corDosOlhos": "verde", "altura": 1.7, "corCabelo": "Preto", "nome": "Caio", "sobrenome": "Maciel", "hobbie": ["Futebol", "LOL", "Tocar guitarra"], "endereco": { "rua": "Jao medeiro", "numero": 234, "cidade": "São Paulo", "estado": "SP" } }'

console.log(JSONITO);
console.log(JSON.parse(JSONITO)); // parse serve para transformar novamente em objeto