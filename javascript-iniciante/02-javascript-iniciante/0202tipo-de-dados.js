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

// Somar número com string
var gol = 1000;
var frase = 'Romário fez ' + gol + ' gols';
console.log(frase);
console.log(typeof frase);


// Usando backlashs
var frase1 = "Esse é o \"melhor\" jogo do Palmeiras" // as barras invertidas neutralizam a função das aspas duplas na string.
console.log(frase1);

// Passando string diretamente no console.log()
console.log("O Brasil é o melhor país do mundo!");

// Template string

var gols = 1000;
var frase2 = "Romário fez " + gols + " gols";
var frase3 = `Romário fez ${gols} gols`; // lembrete: Utilizar a crase (`)
console.log(frase3)

/*Exercício*/

// Declare uma variável contendo uma string 
var lanche = 'sandwich';
console.log(lanche);

// Declare uma variável contendo um número dentro de uma string
var fraseCompleta = `O Brasil foi descoberto em ${1500} pelos portugueses`
console.log(fraseCompleta);

// Declare uma variável com sua idade
var age1 = 37;
console.log(age1);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var primeiroNome1 = 'Luiz Eduardo';
var sobreNome1 = 'de Figueiredo Menezes';
var nomeCompleto1 = primeiroNome1 + ' ' + sobreNome1;
console.log(nomeCompleto1);

// Coloque a seguinte frase em uma variável: It's time
var english = 'It\'\s time'
console.log(english);

// Verifique o tipo da variável que contem o seu nome
console.log(typeof nomeCompleto1);