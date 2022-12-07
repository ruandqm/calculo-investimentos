function validar(capital, taxa) {
    if (!(Number.isInteger(capital) && capital >= 0)) {
        throw 'o capital deve ser um numero inteiro positivo'
    }
    if (!(Number.isInteger(taxa) && taxa >= 0)) {
        throw 'a taxa deve ser um numero inteiro positivo'
    }
}
function validarRendimentoReal(rendimento, inflacao) {
    if (!(Number.isInteger(rendimento) && rendimento >= 0)) {
        throw 'o rendimento deve ser um numero inteiro positivo'
    }
    if (!(Number.isInteger(inflacao) && inflacao >= 0)) {
        throw 'a inflacao deve ser um numero inteiro positivo'
    }
}
function validarRendimentoPassado(pAtual, pAnterior) {
    if (pAtual < 0) {
        throw 'o preco atual deve ser um numero positivo'
    }
    if (pAnterior < 0) {
        throw 'o preco anterior deve ser um numero positivo'
    }
}

module.exports = { validar }
module.exports = { validarRendimentoReal }
module.exports = { validarRendimentoPassado }