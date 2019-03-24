const argv = require('./config_yargs').argv;
const { obtenerCursos, inscribirCurso } = require('./tarea_semana1');
//console.log(argv);


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Lista los cursos disponibles en educacion continua');
        obtenerCursos();
        break;
    case 'inscribir':
        console.log('Inscribe un interesado en un curso habilitado');
        inscribirCurso(argv.id, argv.nombre, argv.cedula);
        break;
    default:
        obtenerCursos()
            //console.log('Comando no reconocido');
}