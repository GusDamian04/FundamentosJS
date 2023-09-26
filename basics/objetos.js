// Objeto es una coleccion de datos
// a travéz de key/value llave/valor
/*
objeto = {
    key: 'valor',
    'key': 'valor',
}
objeto.key
objteo['key']
*/

const alumno = {
    name: 'Steve',
    age: 21,
    city: 'Milan',
    califications: [10, 10, 8],
    career: 'TIADSM',
    'last name': 'Jobs',
    'gender': 'Male'
}

console.log(alumno);
console.log(alumno.name);
console.log(alumno.city);
console.log(alumno['califications']);
console.log(alumno['last name']);

alumno.heihht = 1.75;
console.log(alumno.heihht);

const group = {
    name: '4A DSM',
    career: 'TIADSM',
    classroom: 'LabRedes 1',
    subjects: ['Aplicaciones', 'Modeleado', 'Data Bases'],
    alumns: [alumno, alumno, alumno]
}

console.log(group);
console.log(group.subjects[1]);
console.log(group.alumns[0].califications[1]);