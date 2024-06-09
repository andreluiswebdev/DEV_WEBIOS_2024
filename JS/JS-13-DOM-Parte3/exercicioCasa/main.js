function calcularNovoSalario() {
    const salarioAtualInput = document.querySelector("#salarioAtual");
    const resultadoParagrafo = document.querySelector("#resultado");
  
    const salarioAtual = parseFloat(salarioAtualInput.value); // parseFloat converte o valor atual (que é uma string) em um número decimal.
  
    if (isNaN(salarioAtual) || salarioAtual <= 0) { // verifica se o valor é isNaN ou se é menor ou igual a zero, se for true, o salaário não é valido.
      resultadoParagrafo.textContent = "Por favor, insira um salário válido.";
      return;
    }
  
    const aumentoPercentual = salarioAtual * 0.17; // calcula o aumento de 17% sobre o digitado pelo usuario
    const novoSalario = salarioAtual + aumentoPercentual + 215; // calcula o novo salário somando o salario digitado pelo usuario, o aumento de 17% e o reajuste fixo de R$215.

    resultadoParagrafo.textContent = `Novo salário: R$ ${novoSalario.toFixed(2)}`; // utilizei o método .toFixed(2) para formatar um número fixo de casas decimais, nesse caso duas após o ponto.
  }
  