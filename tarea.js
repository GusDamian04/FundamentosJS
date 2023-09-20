const inputTarea = document.getElementById('inputTarea');
const listaTarea = document.querySelector('#tareas ul');
const tiempo = document.getElementById('tiempo')

const tareas = [];

function addTarea() {
    const dato = inputTarea.value
    if(dato){
        tareas.push({tarea: dato, time: tiempo.value});
        inputTarea.value = '';
        showTareas();
    };
}

function showTareas(){
    const tareasLi = tareas.map(tarea => `<li>${ tarea.tarea } - ${ tarea.time}</li>`);
    listaTarea.innerHTML = tareasLi.join('');
}