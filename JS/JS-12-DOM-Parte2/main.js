// getElementById
let primeiroTitulo = document.getElementById("primeiroTitulo")

// estilizando a cor da fonte
primeiroTitulo.style.color = 'red'

// innerText > Insere um novo texto
primeiroTitulo.innerText = 'Alanzoka'

let segundoTitulo = document.getElementById("segundoTitulo")

segundoTitulo.style.color = 'blue'

// getElementsByClassName
let pegaClasse = document.getElementsByClassName("getClass")

// aplica somente no elemtento descrito no indice
// pegaClasse[1].style.color ='blue'

console.log(pegaClasse);
console.clear()

// O método getElementsByName retorna a coleção de todos os elementos do documento com o nome específico, ou seja, esse método verifica o atributo HTML name. Isso significa que esse método pode retornar mais de um elemento.

// > Método getElementsByName

let byName = document.getElementsByName('filho')

console.log(byName)

byName.forEach(funcao)

function funcao (byName) {
    return byName.style.color = 'pink'
}

console.clear()

// getElementsByTagName modificiar uma determinada tag
let byTagName = document.getElementsByTagName("p")

for(c = 0; c < byTagName.length; c++){
    byTagName[c].style.color = '#FF4500'
    byTagName[c].style.fontSize = '20px'
    byTagName[c].style.boxShadow = '5px 2px 10px #000000'
    if(c % 2) byTagName [c].style.backgroundColor = '#FFFF00'
    else byTagName[c].style.backgroundColor = '#fff'
}

// como remover
let removendo = document.getElementById('remove1')
removendo.remove()

console.log(byTagName);


let recebeLista = document.getElementById('pailista')
recebeLista.style.listStyle = 'none'