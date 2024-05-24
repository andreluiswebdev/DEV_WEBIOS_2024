// Função

function soma(num1, num2, num3) { // parametros
    var num1 
    var num2 
    var num3

    // if(email == "andreluis.h@hotmail.com" && senha == "teste"){
    //     return URL
    // }else{
    //     return "Senha ou Email incorreto"
    // }


    return num1 + num2 + num3// 7
}

console.log(soma(2, 3, 2)); // com parenteses
// console.log(soma); // sem parenteses
console.clear()

function media(nota1, nota2, nota3, nota4){
    return(nota1 + nota2 + nota3 + nota4) / 4
}
console.log(media(10,8,6,6));

console.clear()

const media2 = (n1,n2,n3,n4) => {
    return(n1 + n2 + n3 + n4) / 4
}
console.log(media2(5, 5, 5, 5));

console.clear()

function onloadTela() {
    alert("Sua tela está carregada Bem-Vindo")
    console.log("Recarregou a tela");
}

console.clear()

const clique = () => {
    alert("Bem-vindo você clicou em mim")
    console.log("Você clicou em um botão");
}
