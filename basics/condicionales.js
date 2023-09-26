// Condicionales Javascript
// if(exp) {body}
const age = 18;
if (age >= 18){
    console.log('Es mayor');
}
// if (exp) {body} else {body}
if (age >= 18){
    console.log('Es mayor');
} else {
    console.log('Es menor');
}
// if ternario (exp)? true: false:
(age >= 18)? console.log('Es mayor'): console.log('Es menor');
// if(exp) {} else if(exp) {} else {}
const ppt = Math.ceil(Math.random() * 3);
if (ppt === 1){
    console.log('Cayó Piedra')
} else if (ppt === 2){
    console.log('Cayó Papel')
} else {
    console.log('Cayó Tijera');
}
// switch / case
const day = Math.ceil(Math.random() * 7);
switch(day){
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
        console.log('Es Lunes');
        break;
    case 3:
        console.log('Es Martes');
        break;
    case 4:
        console.log('Es Miercoles');
        break;
    case 5:
        console.log('Es Jueves');
        break;
    case 6:
        console.log('Es Viernes');
        break;
    default:
        console.log('Es Sabado');
        break;
}
// Truthy and Falsy
// Distintos tipos de datos evaluados como booolean
// 0 -> false
// Not 0 -> true
// '' -> false
// 'algo' -> true
let apples = 0;
if(apples > 0){
    console.log(`Tenemos ${ apples } manzanas`)
} else {
    console.log(`No hay manzanas`)
}
apples = 10;
if(apples){
    console.log(`Tenemos ${ apples } manzanas`)
} else {
    console.log(`No hay manzanas`)
}

let userLoggeado = '';
let usuarioActual;
userLoggeado?
    usuarioActual = userLoggeado:
    usuarioActual = 'Invitado';

console.log(usuarioActual);

userLoggeado = 'Gus';

usuarioActual = userLoggeado || 'Invitado';
console.log(usuarioActual);