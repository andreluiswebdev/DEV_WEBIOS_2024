// Class
//  Objetos são compostos por duas coisas: Propriedades = Caracteristicas e Métodos = Funcionalidades
class Carro{
    constructor (nome, ano){ // em parenteses vao os parametros
        this.nome = nome;
        // o que está antes do sinal de igual é uma propriedade que com o this sabemos que pertence a classe e o que está depois do sinal de igual sabemos que é um parametro
        this.ano = ano;
        // variavel nome/propriedade sempre pertencem a isso; isso o que?
        // pertencem a classe que você acabou de criar
    // Funcionalidade para saber quantos anos o carro tem; ano atual - ano da criação 
    // Métodos
    }
    anoCarro(anoAtual) {
        return anoAtual - this.ano;
        // tem que declarar a variavel depois
        // anoAtual = 2024
        // this.ano = 2012 (EXEMPLO DO carro1)
    }
}

// new = novo
// criar uma nova cópia da classe = instance
let carro1 = new Carro ("Kwid", 2012);
let carro2 = new Carro ("Mobi", 2015);
let carro3 = new Carro ("HB20", 2018);
let carro4 = new Carro ("Ferrari Roma", 2024);

console.log(carro1);
console.log(carro2);
console.log(carro3);
console.log(carro4);

let anoAtual = new Date();
let recebeAno = anoAtual.getFullYear(); 
console.log(recebeAno);
console.log(carro1.anoCarro(recebeAno)); // faz o calculo do ano atual - o ano que o carro foi lançado

