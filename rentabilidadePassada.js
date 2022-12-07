const validacao = require('./validar.js')

function rentabilidadePassada(pAtual, pAnterior) {
    validacao.validarRendimentoPassado(pAtual, pAnterior)
    let rendimento = (pAtual / pAnterior) * 100 - 100
    console.log(rendimento.toFixed(2) + '%')
}
try {
    rentabilidadePassada(14, 9)
}
catch (err) {
    console.error('Erro: ' + err)
}