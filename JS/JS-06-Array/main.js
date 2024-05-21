// Array
var numeros = [-2,  40,  16,  111,  33,  64]
// posições      0    1    2    3     4    5

console.log(numeros);
console.log(numeros[3]);

console.clear();

var teste = ["Lucas", "André", "Luiz", "Luisa", "Vitor", "Marcos", "Raildes", "Eliana"]

console.log(teste[3]);
console.log(teste[7]);
console.log(teste[3], teste[7]);

// var aleatorios = [true, "Texto", 345, "texto", false]
// console.log(aleatorios);

console.clear();

var bidi = [
    ['Banana', 'Maçã', 'Pêra'], // linha 0
    ['Laranja', true, 1], // linha 1
    [null, 'Uva', -350, 4566] // linha 2
]

// para acessar info utilizando array bidi passamos no colchetes o indice da linha e depois coluna

console.log(bidi);
console.log(bidi[1][1]);
console.log(bidi[2][3]);

console.clear();

var bidu = [
    ["Pipoca", "Arroz", "Feijão", "Batata"], // linha 0
    ["Molho de tomate", "Alface", "Leite em pó", "Detergente"], // linha 1
    ["Leite de coco", "Candida", "Maçã", "Vinagre"], // linha 2
    ["Bolacha", "Azeite", "Limão", "Shampoo"] // linha 3
]

console.log(bidu[0][2]);
console.log(bidu[1][3]);
console.log(bidu[2][2]);
console.log(bidu[3][3]);
console.log(`\n ${bidu[0][2]} \n ${bidu[1][3]} \n ${bidu[2][2]} \n ${bidu[3][3]}`); // \n serve pra quebrar a linha 

console.clear();

// altera o valor de um item
let moeda = ["Real", "Euro", "Coroa", "Dollar"]

console.log(`Antes: ${moeda}`);
moeda[3] = "Yen"
console.log(`Depois: ${moeda}`);

console.clear();

// transforma em string
let numArray = [2, 4, 6, 8, 10]
console.log(numArray);
var mudanca = numArray.toString()
console.log(mudanca);

console.clear();

//  transforma array em string e muda o separador dos valores
var teste1 = [5, 10, 15, 20, 25, 30]
console.log(teste1);
var mudanca2 = teste1.join(' ** ')
console.log(mudanca2);
console.log(typeof mudanca2);


console.clear();

// tamanho do array
let array = [0, 1, 2, 3, 4]
console.log(array.length);

console.clear();

// deletando o ultimo item com pop
let utilizaPop = ["Pollyana", "André", "Felippe", "Lucas Nathan", "Esther", "LudeMilla"]
var mudanca4 = utilizaPop.pop() // removi do final do array
console.log(utilizaPop);
console.log(mudanca4);
var mudanca5 = utilizaPop.push('Saraiva') // inseri no final do array
console.log(mudanca5);
console.log(utilizaPop);

console.clear();

var nomesCarros = ["Audi", "Celta", "Uno com escada", "HB20"]
console.log(nomesCarros);
var mudanca6 = nomesCarros.shift() // remove o primeiro item do array
console.log(mudanca6);
console.log(nomesCarros);

console.clear();

// inserir um item no inicio
var insereNoInicio = [true, 34, "Mano", "Socorro", "JS"]
// console.log(insereNoInicio);
// var mudanca7 = insereNoInicio.unshift('Nice') // insere no inicio
// console.log(mudanca7);
// console.log(insereNoInicio);
delete insereNoInicio[2] // exclue apenas o valor, fica como empty no console


console.log(insereNoInicio);






