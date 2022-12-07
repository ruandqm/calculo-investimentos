const validacao = require('./validar.js')

function rentabilidadeReal(rentabilidade, inflacao) {
    validacao.validarRendimentoReal(rentabilidade, inflacao)
    let rentabilidadeReal = ((1 + (rentabilidade / 100)) / (1 + (inflacao / 100)) - 1) * 100
    console.log(rentabilidadeReal.toFixed(2) + '%')
}
try {
    rentabilidadeReal(8, 4)
}
catch (err) {
    console.error('Erro: ' + err)
}