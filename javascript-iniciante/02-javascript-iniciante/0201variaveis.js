/* Utilizando uma variável para cada valor.*/

// é preciso sempre lembrar de declarar a variável
// caso contrário, ao ser chamada, apresentará um erro.

const nome = 'Luiz Eduardo';
let idade = 37;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

/*Declarando uma variável para vários valores.*/

var sobreNome = 'Menezes', // a separação ocorre por vírgulas
cidade = 'Belo Horizonte';


console.log(sobreNome, cidade);

/*Conceito de Hoisting*/
// O código é executado de cima para baixo da esquerda para a direita
// Logo; é preciso primeiro declarar a variável, para em seguida chama-la

console.log(casa);
var casa = 'sítio';
// retorna undefined

var profissao = 'software engineer';
console.log(profissao);
// retorna 'software engineer'.


/*Mudar o valor atribuido*/
// é possível mudar valores atribuidos para 'var' e 'let'
// para 'const' não é possível

var idade1 = 37;
idade = 35;

let preco1 = 50;
preco1 = 45;

let possuiFaculdade1 = true;
possuiFaculdade1 = false;
// retorna erro


/*Exercício*/

// Declarar uma variável com seu nome
const name = 'Luiz Eduardo';

// Declarar uma variável com sua idade
var age = 37;

// Declarar uma variável com sua comida 
// favorita e não atribuir valor
var favoriteFood;

// Atribuir valor a sua comida favorita
favoriteFood = 'churrasco';

// Declarar 5 variáveis diferentes sem valores
var carro1;
var carro2;
var carro3;
var carro4;
var carro5;

// declarado com apenas um comando
var carro, rua, casa, faculdade, país;