const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp;
    switch(opcion){
        case 1:
            resp = 'Todo saldrá Bien 😀';
            break;
        case 2:
            resp = 'Nada saldra bien ☠️';
            break;
        case 3:
            resp = 'Esto es aburrido 🥱';
            break;
        case 4:
            resp = 'Alguien llega a leer esto? 🤔';
            break;
        case 5:
            resp = 'Quiero coca 😋';
            break;
        case 6:
            resp = 'Por que sigues aqui? 🤨';
            break;
        case 7:
            resp = 'Ponte hacer algo productivo 😒';
            break;
        default:
            resp = "No lo sé, bueno si se pero no te voy a decir 🤐";
    }
    respuesta.innerHTML = resp
}