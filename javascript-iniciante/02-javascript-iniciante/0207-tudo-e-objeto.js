/* Tudo é Objeto */

// Strings, Números, Boolean, Objetos e mais, possuem propriedades
// e métodos. Por isso são objetos.

var nome = 'Luiz Eduardo';

nome.length; // 12
nome.charAt(1); // 'u'
nome.replace('Luiz', 'João'); // 'João'

console.log(nome.length);
console.log(nome.charAt(5));
console.log(nome.replace('Luiz', 'Pedro'));


// Uma string herda propriedades e 
// métodos do construtor String()

/* Números */

var altura = 1.8;

console.log(altura.toString()); // 1.8
console.log(altura.toFixed()); // '2'

/* Por um breve momento o  número é 
envolvido em um Objeto (coerção), tendo
acesso assim as suas propriedades e métodos.
*/


/* Funções */
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

console.log(areaQuadrado.length);