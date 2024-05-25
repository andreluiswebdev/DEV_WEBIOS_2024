// metodo ForEach
let frutas = ["Maçã", "Abacaxi", "Uva", "Morango", "Banana", "Mamão"]

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`);
    console.log(`Indice: ${indice}`);
}

// Arrow function
frutas.forEach(teste = (nomeFruta, indice) =>{
    console.log(`nomeFruta: ${nomeFruta}`);
    console.log(`Indice: ${indice}`);
})

console.clear();

// Arrow function mais compacta
frutas.forEach((teste, indice) => console.log(teste, indice))
// ele vai retornar apenas o nome e não vai retornar o indice

console.clear();

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

tarefa.forEach((tarefa) => console.log(`${tarefa.nomeTarefa} \n ${tarefa.id} \n ${tarefa.isPronta}`))// exibe os nomes das tarefas
// tarefa.forEach((tarefa) => console.log(tarefa.id)) // exibe os id's
// tarefa.forEach((tarefa) => console.log(tarefa.isPronta)) // exibe isPronta

console.clear();

let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo " + numeros) 
console.log("Novo array " + novoArray);

// cria um array com somente a propriedade que vc colocou
let mapText = tarefa.map((retornaText) => { 
    console.log(retornaText.nomeTarefa);
})

let testao = tarefa.map((retornaIs) => {
    console.log(retornaIs.isPronta);
})

console.clear();

// FILTER

let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 89]

let resultado = numeros2.filter(retornaFiltro)

function retornaFiltro(num){
    return num > 30 
}

console.log(resultado);

console.clear();

let tarefaFiltro = tarefa.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})

console.log(tarefaFiltro);

console.clear();

// FIND
let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]


console.log(
    sapatos.find((retornaFind) => {
        // console.log(retornaFind.marca = "Puma")
        return retornaFind.marca == "Puma"
    })
)



// // Exibir o nome e o indice
// formato com for
// for(var i = 0; i < frutas.length ; i++){
//     console.log(`Nome: ${frutas[i]}`)
//     console.log(`Indice: ${[i]}`);
// }