/* Pode ou não retornar um Valor */

/* 
Quando não definimos o return, ela irá retornar 'undefined'.
O código interno da função é executado normalmente, independente
de existir valor de return ou não. */

function imc2(peso1, altura1) {
  const imc = peso1 / (altura1 ** 2);
  console.log(imc);
}

imc2(20, 1.8);
console.log(imc2(1000, 1.8));

/* Valores retornados */

/* 
Uma função pode retornar qualquer tipo de dado e até outras
funções. */

function terceiraIdade(idade) {
  console.log(typeof idade);
  if(typeof idade !== 'number') {
    return 'Informe a sua idade';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60))
/* ALERTA */
/* Cuidado, retornar diferentes
tipos de dados na mesma função
não é uma boa Ideia. */

/* ESCOPO */ 
/* 
Variáveis e funções definidas dentro de um bloco {}, não são
visíveis fora delete. */
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países`;
}

/* ESCOPO LÉXICO */
/* 
Funções conseguem acessar variáveis que foram criadas no contexto 'pai' 
*/

var profissão = 'Engenheiro';

function dados() {
  var nome = 'Luiz';
  var idade = 29;
  function outrosDados() {
    var endereco = 'Vitória / ES'
    var idade = 37;
    return `${nome}, ${idade}, ${endereco}, ${profissão}`;
  }
  return outrosDados();
}

// dados(); Retorna 'Luiz, 37, Vitória / ES, Engenheiro.'
// outrosDados(); Retorna um erro