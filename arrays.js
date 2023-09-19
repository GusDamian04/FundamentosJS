// Arrays en Javascript
// Colección oredenada de datos
const miArray = new Array('1', 2, 3);
const otherArray = [1, 2, true, 1.4];
console.log(miArray); // [´1´, 2, 3]
console.log(otherArray);
console.log(miArray[0]); // ´1´
console.log(otherArray[1]); // 2
console.log(miArray[1]); // 2
console.log(otherArray[2]); // true

otherArray[1] = 'One';
otherArray[1] = 'Three';
console.log(otherArray);

// Podemos insertar elementos
// push () para insertar al final
// unshift() para inseritar al inicio
// pop() parea extraer del final
// shift() para extraaer del inicio
const pila = []; // ultimo en entrar es primero en salir
pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);
console.log(pila);
pila.pop();
pila.pop();
console.log(pila);

const cola = []; //Primero en entrar es primero en salir
cola.push(1);
cola.push(2);
cola.push(3);
cola.push(4);
console.log(cola);
cola.shift();
cola.shift();
console.log(cola);