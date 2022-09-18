/* Objetos */

/* Conjunto de variáveis e funções, que são chamadas de
propriedades e métodos.
*/
var pessoa = {
  nome: 'Luiz Eduardo',
  idade: 37,
  profissão: 'Engenheiro',
  possuiFaculdade: true,
}

pessoa.nome; // 'Luiz Eduardo'
pessoa.possuiFaculdade; // true

/* Métodos */
// É uma propriedade que possui uma função no local do seu valor
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados;
quadrado.area(5);
quadrado.perimetro(5);

/*
Existe também uma abreviação no ES6+:
area: function() {} para area() {}
*/

var quadradoNovo = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

/* Organizar o Código */
/* Objetos servem para organizar o código em pequenas partes reutilizáveis. */

Math.PI;
Math.random();

var pi = Math.PI;
console.log(pi);

/*
Math é um objeto nativo de
Javascript. Já percebeu que 
console é um objeto e log() um
método?
*/

console.table(pessoa)
console.log(Math.cos(120))
