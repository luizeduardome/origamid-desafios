
/* Criar um Objeto */

// Um objeto é criado utilizando as chaves {}

var carro = {}
var pessoa = {}

console.log(typeof carro); // 'object'
console.log(typeof pessoa); // 'object'

/* Dot Notation Get */
// Acesse propriedades de um objeto utilizando o ponto

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor;

/* Palavra-chave this */
// this irá fazer uma referência ao próprio objeto

var height = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu2.metadeHeight(); //25
// sem o this, seria 60

// this irá retornar o próprio objeto

/* Protótipo e Herança */
// O objeto herda propriedades e métodos do objeto que foi
// utilizado para criar o mesmo

var menu = {
  width: 800,
}

menu.hasOwnProperty('width'); // true
menu.hasOwnProperty('height'); // false

// hasOwnProperty é um método de Object

/*EXERCÍCIOS*/

// Crie um objeto com os seus dados pessoais

var dadosPessoais = {
  nome: 'Luiz Eduardo',
  sobreNome: 'de Figueiredo Menezes',
  idade: 37,
  possuiFaculdade: true,
  faculdade: 'IFES',
  profissao: 'Engenheiro',
  status: 'sono',
}

// Crie um método no objeto anterior, que mostre seu nome
// completo

dadosPessoais.nomeCopleto = function() {
  return `${this.nome} ${this.sobreNome}`;
}


// Modifique o valor da propriedade preço 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
  mudaValor() {
    return this.preco + 2000;
  }
}

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem.
var cachorro = {
  raca: 'labrador',
  idade: 10,
  cor: 'preto',
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Late';
    } else {
      return 'Não late';
    }
  }
}