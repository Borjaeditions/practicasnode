const colors = require('colors');
const argv = require('./config/yargs.js');
const { crearArchivo } = require('./helpers/multiplicar.js');
//tabla del X número
console.clear();

//console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);
console.log('listar: ', argv.listar);
//Los primeros dos argumentos devuelven la dirección del programa
//primero, la dirección de Node.exe
//Segundo, la dirección de "app.js", el programa donde se ha escrito la secuencia de código
//Tercero, lo que se escriba en la consola, como un tipo de entrada por teclado pero sólo puede ser ejecutado una vez (cuando inicia el programa)


//const [,,arg3] = process.argv;
//const [, base] = arg3.split('=');  
//console.log(base);

let multiplo;

multiplo = argv.base;
listar = argv.listar;
limite = argv.hasta;

crearArchivo (multiplo, listar, limite)
    .then(nombreArchivo => console.log('Creado'.green))
    .catch(error => console.log(error));   
