/* Bloco de código que pode ser executado e reutilizado. Valores
podem ser passados por uma função e a mesma retorna outro valor.
 */

function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

const total = 5 * pi(); // 15.7

console.log(pi());

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

/* Parâmetros e Argumentos */

// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
    const indice = peso / (altura ** 2);
    return indice;
}

imc(80, 1.80) // 80 e 1.80 são argumentos
imc(60, 1.70) // 60 e 1.70 são argumentos

/* Separar por vírgula cada
parâmetro. Você pode definir
mais de um parâmetro ou nenhum 
também. 
 */

console.log(imc(80, 1.80))

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato'
  } else {
    return 'Eu não gosto de nada'
  }
}

/* Argumentos podem ser funções */
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

/* DICA IMPORTANTE */
/* Funções anônima são aquelas em que o nome da função
não é definido, escritos como "function() {}" ou () => {} */

addEventListener('click', function() {
  console.log('oi');
})

function mostraConsole() {
  console.log('Olá Kardec');
}

addEventListener('click', mostraConsole);