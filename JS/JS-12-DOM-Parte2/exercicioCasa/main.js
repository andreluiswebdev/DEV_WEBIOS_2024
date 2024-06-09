function adicionarImagem() {
    const imagem = document.createElement('img'); // usei para criar uma tag <img> no documento html
    imagem.src = '/JS/JS-12-DOM-Parte2/exercicioCasa/UmbrellaAcademy.jpeg'; 
    imagem.alt = 'Umbrella Academy';
    document.getElementById('containerImagem').appendChild(imagem); // adiciona o elemento imagem como filho do elemento containerImagem, isso insere a imagem dentro da div e a torna visivel na página
    document.body.style.backgroundColor = '#262525';
}

function exibirMensagem() {
    const nome = prompt("Por favor, digite seu nome:");
    if (nome) { // se o usuario digitou faça tal coisa
        const mensagemBoasVindas = document.getElementById("mensagemBoasVindas"); // obtém a div com o id mensagemBoasVindas do html
        mensagemBoasVindas.textContent = `Olá ${nome}, bem-vindo à nossa academia!`;  // cria uma mensagem personalizada com o nome digitado no prompt
    }
}

function calcularTabuada() {
    const numero = parseInt(prompt("Digite um número para ver a tabuada")); // parseInt converte o valor digitado (que é uma string) em um número inteiro
    if (!isNaN(numero)) { // verifica se o valor digitado não é um número
        let tabuada = "";
        for (let i = 1; i <= 10; i++) { // serve para contar do 1 até o 10, por ex na tabuada do 5, 5x1, 5x2, 5x3.... quando chegar no 5x10 encerra.
            tabuada += `${numero} x ${i} = ${numero * i}<br>`;
        }

        const resultadoTabuada = document.getElementById("resultadoTabuada");
        resultadoTabuada.innerHTML = tabuada;
     } else {
            alert("Por favor, digite um número válido.")
        }
    }

