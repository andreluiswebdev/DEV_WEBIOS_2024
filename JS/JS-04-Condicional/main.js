// se todos os alunos estiverem com a blusa e o crachá todos recebem 10
// se não todos estão com zero

var todosDeCracha = true
var todosDeCamisa = false
if (todosDeCamisa && todosDeCracha){
    console.log("Todos estão com 10 em JS");
} else { 
    console.log("Todos estão com zero");
}

console.clear();

var estaChovendo = false
if (estaChovendo == true){
    console.log("Pego o guarda chuva");
} else {
    console.log("Continuo andando normalmente");
}

console.clear();

// atividade sala
var numero1 = 5
var numero2 = 10
if(numero1 > numero2){
    console.log("numero1 é maior que numero2")
} else {
    console.log("numero1 é menor que o numero2")
}

// operador ternário
var numero3 = 4
var numero4 = 15
numero3 > numero4 ? console.log("número3 é maior") : console.log("número4 é maior");

console.clear();

// Se for Janeiro = Verão / Junho = Outono / Inverno
// SE NAO SE 
// let mes = "OUTUBRO"
// if(mes == "JANEIRO"){
//     console.log("É verão");

// }else if(mes == "JUNHO"){
//     console.log("É Outono");

// }else if(mes == "OUTUBRO"){ 
//     console.log("É primavera");

// }else{
//     console.log("É inverno");
// }

console.clear();

// switch case 
let mes2 = "JUNHO"
switch(mes2){//guardo a expressão que quero validar
   case "JANEIRO":
    console.log("É verão")
    break;
    case "JUNHO":
    console.log("É outono")
    break;
    case "OUTUBRO":
    console.log("É primavera")
     break;
    default:  
    console.log("É inverno")
    break;
}
