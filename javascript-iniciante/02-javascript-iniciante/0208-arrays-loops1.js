let brasilCampeao = [1959, 1962, 1970, 1994, 2002];

for (let i = 0; i < brasilCampeao.length; i += 1) {
    console.log(`O Brasil foi campeão do mundo nos anos de ${brasilCampeao}`)
}

let frutas = ['banana', 'pera', 'uva', 'caja'];
for (let index = 0; index < frutas.length; index += 1) {
    console.log(frutas[index]);
    if(frutas[index] === 'uva') {
        break
    }
}

let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);