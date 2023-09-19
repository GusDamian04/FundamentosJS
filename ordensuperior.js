// Funciones de Orden Superior
// High Order Functions

/*
    Funciones que reciben funciones
    como parametros
*/
const myFunction = () => {
    console.log('Ejecuta mi Función')
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const oterSameFunction = myFunction;
oterSameFunction();

const funOne = () => {
    console.log('Ejecuta función One');
}

const funTwo = (username) => {
    console.log('Ejecuta función Two');
    console.log('Holaa ' + username);
}

const funThree = (otherFunction) => {
    console.log('Inicia función 3');
    otherFunction();
    console.log('Termina funcion 3');
}

funOne();
funTwo('Gus');
funTwo('Damian');
funThree(funOne);
funThree(() => console.log("Sorry una Arrow Funtion"));