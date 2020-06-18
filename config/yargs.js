const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo de la tabla con cierta base y limite', opts)
    .help()
    .argv;


module.exports = {
    argv
}