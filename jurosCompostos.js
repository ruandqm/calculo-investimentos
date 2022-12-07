const validacao = require('./validar.js')

function jurosSimples(capital, taxa, tempo) {
    validacao.validar(capital, taxa)
    let montante = capital * (1 + (taxa / 100)) ** (tempo * 12)
    console.log('R$ ' + montante.toFixed(2))
}
try {
    jurosSimples(1000, 2, 1)
}
catch (err) {
    console.error('Erro: ' + err)
}