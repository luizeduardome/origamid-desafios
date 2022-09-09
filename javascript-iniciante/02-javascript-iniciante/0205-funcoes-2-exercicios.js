// Crie uma função para verificar se um valor é Truthy

function verificaValor(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuad(perimetro) {
  return perimetro * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meusDados() {
  const nome = 'Luiz Eduardo';
  const sobrenome = 'de Figueiredo Menezes';
  return `${nome + sobrenome}`;
}

function meusDados2(nome, sobrenome) {
  return nome + sobrenome;
}

// Crie uma função que verifica se um número é par

function verificaPar(number) {
  if(number % 2 === 0) {
    return 'par';
  } else {
    return 'ímpar';
  }
};

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function checkType(value) {
  return typeof value;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function() {
  console.log('Luiz Eduardo de Figueiredo Menezes');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
