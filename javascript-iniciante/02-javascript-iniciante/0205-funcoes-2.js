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