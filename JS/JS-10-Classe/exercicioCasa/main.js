class contaBancaria{
    constructor (nome, idade, salario, sexo, agencia, conta, numeroConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }
    contaPoupanca(){
        const taxaMensal = 0.015; 
        const desconto = this.salario * taxaMensal; // como a taxaMensal já está em formato decimal (1,5 dividido por 100 == 0.015), a multiplicação do salario com a taxaMensal retorna o valor que deve ser descontado do cliente
        const novoSalario = this.salario - desconto; 
        return {
            dados: this, // usei dados para retornar todas as informações do "cliente"
            novoSalario: novoSalario // retorna o novo salario atualizado
        }
    }
    contaCorrente(){
        const taxaMensal = 0.036;
        const desconto = this.salario * taxaMensal;
        const novoSalario = this.salario - desconto;
        return {
            dados: this,
            novoSalario: novoSalario
        }
    }
    contaEstudante(){
        const taxaMensal = 0.012;
        const desconto = this.salario * taxaMensal;
        const novoSalario = this.salario - desconto;
        return {
            dados: this,
            novoSalario: novoSalario
        }
    }
}

let clientePoupanca = new contaBancaria("João", 30, 3000, "Masculino", 1234, "Poupança", 567895748)
let clienteCorrente = new contaBancaria("Maria", 25, 4500, "Feminino", 5678, "Corrente", 987696585)
let clienteEstudante = new contaBancaria("Ana", 20, 1200, "Feminino", 9012, "Estudante", 345651489)

console.log("Conta Poupança:", clientePoupanca.contaPoupanca());
console.log("Conta Corrente:", clienteCorrente.contaCorrente());
console.log("Conta Estudante:", clienteEstudante.contaEstudante());