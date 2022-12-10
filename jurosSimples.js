const validacao = require('./validar.js')

function jurosSimples(capital, taxa, tempo) {
    validacao.validarJuros(capital, taxa)
    let juros = capital * (taxa / 100) * (tempo * 12)
    console.log('R$ ' + juros)
}
try {
    jurosSimples(1000, 2, 1)
}
catch (err) {
    console.error('Erro: ' + err)
}