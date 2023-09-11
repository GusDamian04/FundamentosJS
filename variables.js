// Versiones anteriores a ES6 era var
var miVariable;

// de ES6 en adelante
// cons y let :)

// cons delcara constantes, no permite reasignacion
// Al crearla debe inicializarse
const PI = 3.14;
//PI = 3.28;

// let declara variables
// permite reasignación
// se puede declarar y luego inicializar
// JS detecta automaticamente el tipo de datos

let firstname;
console.log(firstname);
firstname = 'Peter Parker';
console.log(firstname);
console.log(typeof(firstname));

firstname = 18;
console.log(firstname);
console.log(typeof(firstname));