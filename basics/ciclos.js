// Ciclos de Javascript
// for
for(let i = 0; i < 3; i++ ){
    console.log("Indice " + i);
}

// while
let i = 0;
while(i < 3){
    console.log("Indice " + i);
    i++;
}

// do while
i = 0;
do {
    console.log("Indice "+ i);
    i++
} while (i === 0);

// recorriendo objetos
const letras = 'abcd';
const numeros = [3, 1, 5, 2];

for(let i = 0; i < letras.length; i++){
    console.log(letras[i]);
}

for(let i = 0; i < numeros.length; i++){
    console.log(letras[i]);
}

// for of
console.log('For od\n');
for(const letra of letras){
    console.log(letra);
}

for(const numero of numeros){
    console.log(numero);
}