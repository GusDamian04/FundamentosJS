// Strings en Javascript

let miString = "Este Es uN TeXtO" + 'de PrUeBa';
console.log(miString);

console.log(miString.charAt(5));
console.log(miString.endsWith('a'));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase);


console.log("I'm Gus");

console.log('I\'m Gus');

// String Multilinea
const menu = `
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;

console.log(menu)

// String Templates
// placeholder ${}

const name = 'Peter';
const superhero = 'Spiderman'
const age = 20;
console.log("Soy " + name + " soy " + superhero + " y tengo " + age + " años");
console.log(`Soy ${name} soy ${superhero} y tengo ${age} años`);