var string = "Os alunos estão "
var string2  = "reprovados "
var string3 = "ou aprovados? "
var olhaAi = " Os reprovados "
var num1 = 2
var num2 = 4
//concatenar string
console.log(string + string2 + string3)
console.log("Os alunos estão " + "reprovados " + "ou aprovados?")
console.clear()
// template string serve para concatenar string e fazer ao mesmo tempo contas matematicas 
console.log(`${string + string2 + string3 + (num1 + num2) + olhaAi}`)
console.clear();

var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos(alunos)"
// valor da posição do caractere
console.log(texto1.charAt(27));

console.clear();

// tamanho string or contagem de caracteres
var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`na variavel texto3 tem ${texto3.length} caracteres`)

var nome = "Joao"
console.log(nome.length)

console.clear();

// maisculas e minuscula

var texto4 = "aqui está em minusculo"
var texto5 = "AQUI ESTÁ EM MAIÚSCULO"
console.log(`Minusculo: ${texto5.toLowerCase()}`);
console.log(`Maiusculo: ${texto4.toUpperCase()}`);

var nomeUsuarioFacebook = "PkNinadaZl"
console.log(nomeUsuarioFacebook.toUpperCase());

console.clear();

var str = "Mozilla"

console.log(str); 
// palavra mozilla inteira

console.log(str.substring(1, 3));
// oz

console.log(str.substring(3));
// illa 

console.clear();

// replace para alterar um texto por outro 
var mensagem = "Venha para a Microsoft"
var novaMensagem = mensagem.replace('Microsoft', 'IOS')
console.log(novaMensagem)

console.clear();

// remover espaço em branco
var texto6 = "                Olha a carreta                  "
console.log(texto6.trim());