const argv = require('yargs')
    .option('b', {

        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base of the multiplication table' 

    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {

            throw 'La base tiene que ser un número';
            
        }
        else{

            return true;

        }

    })
    .option('l', {

        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Show operations'
        
    })
    .option ('h',{

        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'limit of operations'
        
    })
    .check((argv) =>{

        if (isNaN(argv.h)) {

            throw 'El límite debe ser un número';

        }
        else{

            return true;

        }
        
    })
.argv;

module.exports = argv