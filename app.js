// Verificar librerias de Node.js en 
// https://nodejs.org/docs/latest-v12.x/api/

const  { crearArchivo, listarTabla } =require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
                
let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('No se especificó ningún comando');
}

//let parametro = argv[2];
//let base = parametro.split('=')[1];

