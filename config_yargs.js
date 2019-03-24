const argv = require('yargs')
    .command('listar', 'Mostrar todos los cursos habilitados', {})
    .command('inscribir', 'Inscrir un interesado a un curso', {
        id: {
            demand: true,
            alias: 'i',
            desc: 'Código de identificación del curso',
        },
        nombre: {
            demand: true,
            alias: 'n',
            desc: 'Nombre del interesado',
        },

        cedula: {
            demand: true,
            alias: 'c',
            desc: 'Número de identificación del interesado'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}