// Iteradores en Arrays
/* 
    forEach
    map
    filiter
    reduce
    some
    every
*/

// forEach
const animals =['cat', 'dog', 'bird', 'bear'];
animals.forEach(
    function (animal){
        console.log('Hello ' + animal);
    }
);

animals.forEach(
    (animal) => {
        console.log('Hello ' + animal);
    }
);

animals.forEach(animal => console.log('Hello '+ animal));

// map
// retorna nuevo array a partir del original
const animalColor = animals.map(
    animal => {
        return animal + "tricolor";
    }
);

const animalMayus = animals.map(animal => animal.toUpperCase());

console.log(animals);
console.log(animalColor);
console.log(animalMayus);

const numeros =[1, 2, 3, 4, 5, 7];
const cuadrados = numeros.map(numero => numero ** 2);

console.log(numeros);
console.log(cuadrados);

// Filter 
// crea un nuevo array apartir del original
// mientras cumplan una condicion
const pares = numeros.filter(
    numero => {
        if(numero % 2 ===0){
            return numero
        }
    }
)

const impares = numeros.filter(numero => numero % 2 !== 0);
console.log(numeros);
console.log(pares);
console.log(impares);

// reduce
// regresa un único valor apartir de array
const sumatoria = numeros.reduce(
    (a, b) => {
        return a + b;
    }
)

const factorial = numeros.reduce((a, b) => a * b);

console.log();
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

// some
console.log(numeros.some(numero => numero > 6))
console.log(numeros.some(numero => numero > 8))

// some
console.log(numeros.every(numero => numero > 6))
console.log(numeros.every(numero => numero < 8))

/*
function wrapping(gifts) {
  // Creamos un nuevo array para almacenar los regalos envueltos
  const wrappedGifts = [];

  // Iteramos sobre cada regalo en el array original
  for (const gift of gifts) {
    // Calculamos la longitud del regalo y agregamos 2 para los bordes de papel
    const length = gift.length + 2;

    // Creamos una línea de asteriscos para la parte superior e inferior
    const topBottom = '*'.repeat(length);

    // Creamos el regalo envuelto con los bordes de papel y el regalo en el centro
    const wrappedGift = `${topBottom}\n*${gift}*\n${topBottom}`;

    // Agregamos el regalo envuelto al nuevo array
    wrappedGifts.push(wrappedGift);
  }

  // Devolvemos el array con los regalos envueltos
  return wrappedGifts;
}

// Ejemplo de uso
const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);
*/