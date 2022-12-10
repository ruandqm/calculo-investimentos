exports.validarJuros = function (capital, taxa) {
    if (!(Number.isInteger(capital) && capital >= 0)) {
        throw 'o capital deve ser um numero inteiro positivo'
    }
    if (!(Number.isInteger(taxa) && taxa >= 0)) {
        throw 'a taxa deve ser um numero inteiro positivo'
    }
}

exports.validarRendimentoReal = function (rendimento, inflacao) {
    if (!(Number.isInteger(rendimento) && rendimento >= 0)) {
        throw 'o rendimento deve ser um numero inteiro positivo'
    }
    if (!(Number.isInteger(inflacao) && inflacao >= 0)) {
        throw 'a inflacao deve ser um numero inteiro positivo'
    }
}

exports.validarRendimentoPassado = function (pAtual, pAnterior) {
    if (pAtual < 0) {
        throw 'o preco atual deve ser um numero positivo'
    }
    if (pAnterior < 0) {
        throw 'o preco anterior deve ser um numero positivo'
    }
}