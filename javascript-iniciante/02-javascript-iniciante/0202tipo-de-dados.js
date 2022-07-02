/* 7 tipos de dados*/

// todos são primitivos exceto os objetos

var nome = "Luiz Eduardo"; //string
var idade = 37; //number
var possuiFaculdadeSim = true; //boolean
var time; //undefined
var comida = null; //null
var simbolo = Symbol(); //symbol
var novoObjeto = {}; //objeto
//Primitivos são imutaveis


// descobrindo o tipo da variável
console.log(typeof nome); //string

console.log(typeof time); //undefine

/*String*/

// Somar string e concatenar palavras

var primeiroNome = 'Luiz Eduardo';
var nomeFamilia = 'Menezes';
var nomeCompleto = primeiroNome + ' ' + nomeFamilia;
console.log(nomeCompleto);