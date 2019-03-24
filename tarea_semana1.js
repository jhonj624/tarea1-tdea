const fs = require('fs');

const color = require('colors');

let listaCursos = [];

// Carga de base de datos
const cargarDB = () => {
    try {
        listaCursos = require('./cursos.json');
    } catch (error) {
        listaCursos = [];
    }
    return listaCursos;
}

// ======= LISTA LOS CURSOS DE EDUCACION CONTINUA ========
const obtenerCursos = () => {
    try {
        listaCursos = require('./cursos.json');
    } catch (error) {
        console.log('no se encontró bases de datos de cursos');
        return;
    }

    let visualizarCurso = (curso) => {

        console.log('===== Curso educación continua TDEA====='.green);
        console.log(`Nombre: ${curso.nombre}`);
        console.log(`ID: ${curso.id}`);
        console.log(`Descripción: ${curso.descripcion}`);
        console.log(`Duración: ${curso.duracion} horas`);
        console.log(`Valor: $${curso.valor} pesos`);
        console.log('========================================'.red);
        console.log();
    }

    listaCursos.forEach((curso, i) => {
        setTimeout(function() {
            visualizarCurso(curso);
            //console.log(i);
        }, 2000 * (i + 1))
    });
}

// ======= INSCRIBE UN INTERESADO A UN CURSO HABILITADO ========

const inscribirCurso = (id, nombre, cedula) => {
    cargarDB();
    // Busco el id en la DB de cursos
    let curso = listaCursos.find(curso => curso.id === id);
    if (!curso) {
        console.log(`El curso con el ID:${id} no fue encontrado
        verifique nuevamente con los cursos disponibles`);
        obtenerCursos();
        return;
    }

    // Si no hay error procedemos a la inscripción del curso
    let texto = `El estudiante ${nombre} con cédula ${cedula} 
    se ha matriculado exitosamente en el curso ${curso.nombre} con una 
    duración de ${curso.duracion} y un valor de ${curso.valor}`;

    fs.writeFile(`${cedula}.txt`, texto, (err) => {
        if (err) throw (err);
        console.log(`Se ha creado el archivo exitosamente`);

    });
    console.log('===== Matriculas educación continua TDEA====='.green);
    console.log(`Nombre Estudiante: ${nombre}`);
    console.log(`ID Estudiante: ${cedula}`);
    console.log(`Curso matriculado: ${curso.nombre}`);
    console.log(`Duracion curso: ${curso.duracion} horas`);
    console.log(`Valor del curso: $${curso.valor} pesos`);
    console.log('========================================'.red);

}


module.exports = {
    obtenerCursos,
    inscribirCurso
}