// Funciones con Javascript

/* 
function nombre(params){
    body function
}
*/
/*
const nombre = function(params){
    body function
}
*/
// funcion sin parametros sin retorno
function saluda(){
    console.log('Hellooo!')
}
saluda();

//funcion con parametros sin retorno
const saludaA = function(name){
    console.log(`Holaaa ${ name }`);
}
saludaA('Spiderman');

// funcion con parametros y retornos
const duplica = function(num){
    return num * 2;
}
const doble = duplica(26);
console.log(doble);

// Arrow Function, funciones de flecha ES6
/*
(params) => {
    body function
}
*/
const getFullName = (firstName, lastName) => {
    return firstName + '' + lastName;
}
const nombre = getFullName('Peter', 'Parker');
console.log(nombre);

//Podemos omitit () con un único parametro
const minusculas = (word) => {
    return word.toLowerCase();
}

const mayusculas = word => {
    return word.toUpperCase();
}

console.log(mayusculas('hello'))

//Podemos omitir llaves y return si solo hay una línea
const cuadro = num => num * num;
console.log(cuadro(25));
